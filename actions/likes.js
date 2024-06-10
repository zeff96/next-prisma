"use server";

import { revalidatePath } from "next/cache";

import { LikeSchema } from "@/schemas";
import { PrismaClient } from "@prisma/client";
import { generateNotifications } from "@/lib/notifications";

export const createLike = async (formData) => {
  const validatedFields = LikeSchema.safeParse({
    userId: formData.get("userId"),
    postId: formData.get("postId"),
    username: formData.get("username"),
  });

  if (!validatedFields.success) {
    return { errors: "Invalid data" };
  }

  const { userId, postId, username } = validatedFields.data;

  try {
    const prisma = new PrismaClient();

    const result = await prisma.$transaction(async (tx) => {
      const like = await tx.like.create({
        data: {
          userId,
          postId,
        },
      });

      const users = await tx.user.findMany({
        where: { NOT: { id: userId } },
      });

      await Promise.all(
        users.map(async (user) => {
          await generateNotifications("like", user.id, postId);
        })
      );
      revalidatePath("/", "/notifications");
      return { message: "Liked a post!" };
    });
    return result;
  } catch (error) {
    return { errors: error.message };
  }
};
