"use server";

import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma/prisma";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const register = async (_prevState, formData) => {
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

  console.log(existingUser);

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
  return { message: "User created!" };
};
