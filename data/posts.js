import prisma from "@/lib/prisma/prisma";

export const getAllPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        // omit user password
        user: {
          select: { name: true, email: true, image: true },
        },
        _count: {
          select: { likes: true, comments: true },
        },
      },
    });
    return posts;
  } catch (error) {
    console.log(`Something went wrong, ${error.message}`);
  }
};

export const getPostById = async (id) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        // omit user password
        user: {
          select: { name: true, email: true, image: true },
        },
        _count: {
          select: { likes: true, comments: true },
        },
      },
    });
    return post;
  } catch (error) {
    console.log(`Something went wrong, ${error.message}`);
  }
};
