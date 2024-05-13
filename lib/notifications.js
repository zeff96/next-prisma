import { comment } from "postcss";
import prisma from "./prisma/prisma";

export const generateNotifications = async (
  type,
  userId,
  postId,
  channel = "in-app"
) => {
  try {
    const data = {
      type,
      user: { connect: { id: userId } },
      post: { connect: { id: postId } },
      channel,
    };

    await prisma.notification.create({
      data,
    });
  } catch (error) {
    console.error("Error creating notifications", error.message);
  }
};

export const getNotifications = async (userId) => {
  try {
    const notifications = await prisma.notification.findMany({
      where: { userId },
      include: {
        post: {
          select: {
            id: true,
            body: true,
            user: { select: { id: true, name: true, image: true } },
          },
        },
      },
    });

    return notifications;
  } catch (error) {
    console.error("An error occurred ", error);
  }
};
