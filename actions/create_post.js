"use server";

import { PostSchema } from "@/schemas";
import { generateNotifications } from "@/lib/notifications";
import prisma from "@/lib/prisma/prisma";
import { revalidatePath } from "next/cache";

export const createPost = async (_prevState, formData) => {
  const validatedFields = PostSchema.safeParse({
    userId: formData.get("userId"),
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

  const { userId, body } = validatedFields.data;

  try {
    const post = await prisma.post.create({
      data: {
        userId,
        body,
      },
    });

    const users = await prisma.user.findMany({
      where: { NOT: { id: userId } },
    });

    await Promise.all(
      users.map(async (user) => {
        await generateNotifications("post", user.id, post.id);
      })
    );
    revalidatePath("/", "/notifications");
    return { message: "Post created!" };
  } catch (error) {
    return { errors: error.message };
  }
};
