import prisma from "@/lib/prisma/prisma";

export const getAllPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: true,
      },
    });
    return posts;
  } catch (error) {
    console.log(`Something went wrong, ${error.message}`);
  }
};
