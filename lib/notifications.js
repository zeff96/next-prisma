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
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { lastViewedNotifications: true },
    });

    const notifications = await prisma.notification.findMany({
      where: {
        userId,
        dateCreated: {
          gt: user?.lastViewedNotifications,
        },
      },
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

    await prisma.user.update({
      where: { id: userId },
      data: { lastViewedNotifications: new Date() },
    });

    return notifications;
  } catch (error) {
    console.error("An error occurred ", error);
  }
};

export const getNotificationCounts = async (userId) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { lastViewedNotifications: true },
    });

    const count = await prisma.notification.count({
      where: {
        userId,
        read: false,
        dateCreated: {
          gt: user?.lastViewedNotifications,
        },
      },
    });

    return count;
  } catch (error) {
    console.error("Error fetching notification count", error);
    return 0;
  }
};
