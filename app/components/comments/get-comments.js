import { compareDesc } from "date-fns";

import { Comment } from "./get-comment";
import { getCommentsByPostId } from "@/data/comments";

export const GetComments = async ({ postId }) => {
  const comments = await getCommentsByPostId(postId);

  const orderedPosts = comments.sort((a, b) =>
    compareDesc(new Date(a.created_at), new Date(b.created_at))
  );

  return (
    <>
      {orderedPosts.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
};
