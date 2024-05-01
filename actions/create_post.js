"use server";

import { PostSchema } from "@/schemas";
import { generateNotifications } from "@/lib/notifications";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createPost = async (_prevState, formData) => {
  const validatedFields = PostSchema.safeParse({
    userId: formData.get("userId"),
    username: formData.get("username"),
    body: formData.get("body"),
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;

    if (typeof fieldErrors === "object") {
      const stringErrors = Object.entries(fieldErrors).join(", ");
      return { errors: stringErrors };
    } else {
      return { errors: fieldErrors };
    }
  }

  const { userId, username, body } = validatedFields.data;

  try {
    const prisma = new PrismaClient();

    const result = await prisma.$transaction(async (tx) => {
      const post = await tx.post.create({
        data: {
          userId,
          body,
        },
      });
      const users = await tx.user.findMany({
        where: { NOT: { id: userId } },
      });

      await Promise.all(
        users.map(async (user) => {
          await generateNotifications(
            "postCreated",
            `${username} recently shared a post`,
            user.id
          );
        })
      );
      revalidatePath("/", "/notifications");
      return { message: "Post created!" };
    });
    return result;
  } catch (error) {
    return { errors: error.message };
  }
};
