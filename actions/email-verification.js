"use server";

import { getUserByEmail } from "@/data/user";
import { getVerificationTokenToken } from "@/data/verification_token";
import prisma from "@/lib/prisma/prisma";
import { z } from "zod";

export const verifyEmail = async (_prevState, formData) => {
  const schema = z.object({
    token: z.string().trim(),
  });

  const validatedFields = schema.safeParse({
    token: formData.get("token"),
  });

  if (!validatedFields.success) {
    return { errors: "Invalid fields" };
  }

  const { token } = validatedFields.data;

  const existingToken = await getVerificationTokenToken(token);

  if (!existingToken) {
    return { error: "Invalid token!" };
  }

  const hasExpired = new Date(existingToken.expires_at) < new Date();

  if (hasExpired) {
    return { errors: "Token has expired!" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { errors: "Email does not exist!" };
  }

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await prisma.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { message: "Account verified successfully!" };
};
