"use server";

import { generateNotifications } from "@/lib/notifications";
import prisma from "@/lib/prisma/prisma";
import { CommentSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const createComment = async (formData) => {
  const validatedFields = CommentSchema.safeParse({
    userId: formData.get("userId"),
    postId: formData.get("postId"),
    username: formData.get("username"),
    body: formData.get("body"),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.errors[0].message };
  }

  const { userId, postId, username, body } = validatedFields.data;

  try {
    const result = await prisma.$transaction(async (tx) => {
      const comment = await tx.comment.create({
        data: {
          userId,
          postId,
          body,
        },
      });

      const users = await tx.user.findMany({
        where: {
          NOT: {
            id: userId,
          },
        },
      });

      await Promise.all(
        users.map(async (user) => {
          await generateNotifications("comment", user.id, postId);
        })
      );
      revalidatePath("/", `/posts/${postId}, "/notifications`);
      return { message: "Comment created successfully" };
    });
    return result;
  } catch (error) {
    return { errors: "Something went wrong!" };
  }
};
