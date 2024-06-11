"use server";

import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma/prisma";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/data/mailer";

export const register = async (formData) => {
  const validatedFields = RegisterSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;

    if (typeof fieldErrors === "object") {
      const errorString = Object.values(fieldErrors).join(", ");
      return {
        errors: errorString,
      };
    } else {
      return {
        errors: fieldErrors,
      };
    }
  }

  const { name, email, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { errors: "Email already used!" };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);
  return { message: "verification token sent!" };
};
