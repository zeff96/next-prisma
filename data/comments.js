export const getCommentsByPostId = async (id) => {
  try {
    const comments = await prisma.comment.findMany({
      where: { postId: id },
      include: {
        // omit user password
        user: {
          select: { name: true, email: true, image: true },
        },
      },
    });
    return comments;
  } catch (error) {
    console.log(`Something went wrong, ${error.message}`);
  }
};
