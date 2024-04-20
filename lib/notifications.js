import prisma from "./prisma/prisma";

export const generateNotifications = async (
  type,
  content,
  userId,
  channel = "in-app"
) => {
  try {
    await prisma.notification.create({
      data: {
        type,
        content,
        user: { connect: { id: userId } },
        channel,
      },
    });
  } catch (error) {
    console.error("Error creating notifications", error);
  }
};

export const getNotifications = async (userId) => {
  try {
    const notifications = await prisma.notification.findMany({
      where: { userId },
    });

    return notifications;
  } catch (error) {
    console.error("An error occurred ", error);
  }
};
