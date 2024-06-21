"use server";

import { sendResetPassword } from "@/data/mailer";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { z } from "zod";

export const resetPassword = async (formData) => {
  const schema = z.object({
    email: z
      .string({ invalid_type_error: "Invalid email" })
      .email({ message: "Please enter email" })
      .trim(),
  });

  const validatedFields = schema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return { errors: "Invalid email!" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { errors: "User with given email does not exist. Try again!" };
  }

  const verificationToken = await generateVerificationToken(email);

  await sendResetPassword(verificationToken.email, verificationToken.token);

  return { message: "Verification token sent!" };
};
