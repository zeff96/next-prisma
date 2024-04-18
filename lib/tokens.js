import { getVerificationTokenByEmail } from "@/data/verification_token";
import { v4 as uuidv4 } from "uuid";
import prisma from "./prisma/prisma";

export const generateVerificationToken = async (email) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await prisma.verificationToken.delete({
      where: { id: existingToken.id },
    });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: {
      email,
      token,
      expires_at: expires,
    },
  });

  return verificationToken;
};
