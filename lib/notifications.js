import prisma from "./prisma/prisma";

export const generateNotifications = async (
  type,
  userId,
  postId = null,
  channel = "in-app"
) => {
  try {
    const data = {
      type,
      user: { connect: { id: userId } },
      channel,
    };

    if (postId) {
      data.post = { connect: { id: postId } };
    }

    await prisma.notification.create({
      data,
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
