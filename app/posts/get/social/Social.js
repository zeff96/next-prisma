import React from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import CreateLikesForm from "@/app/components/likes/create_likes";

const Social = ({ userId, postId, username }) => {
  return (
    <div className="flex justify-between">
      <CreateLikesForm userId={userId} postId={postId} username={username} />
      <button type="button">
        <FaRegCommentAlt className="inline mx-2" />
        Comment
      </button>
    </div>
  );
};

export default Social;
