"use server";
import { z } from "zod";
import bcrypt from "bcryptjs";

import { getUserByEmail } from "@/data/user";
import { getVerificationTokenToken } from "@/data/verification_token";

export const passwordVerification = async (formData) => {
  const schema = z.object({
    token: z.string().trim(),
    password: z
      .string({
        invalid_type_error: "Invalid password!",
      })
      .min(6, { message: "Password must be atleast 6 characters long!" })
      .regex(/[A-Z]/, {
        message: "Password must contain atleast one uppercase letter!",
      })
      .regex(/[a-z]/, {
        message: "Password must contain atleas one lowercase letter!",
      })
      .regex(/[0-9]/, { message: "Password must contain atleast one number" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Password must contain atleast one special character!",
      })
      .trim(),
  });

  const validatedFields = schema.safeParse({
    token: formData.get("token"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;

    if (typeof fieldErrors === "object") {
      const errorString = Object.values(fieldErrors).join("\n");
      return {
        errors: errorString,
      };
    } else {
      return {
        errors: fieldErrors,
      };
    }
  }

  const { token, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingToken = await getVerificationTokenToken(token);

  if (!existingToken) {
    return { errors: "Invalid token!" };
  }

  const hasExpired = new Date(existingToken.expires_at) < new Date();

  if (hasExpired) {
    return { errors: "Expired token!" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { errors: "Email does not exist. Please try again!" };
  }

  await prisma.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await prisma.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { message: "Password updated successfully!" };
};
