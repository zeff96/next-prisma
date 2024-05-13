import React from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import CreateLikesForm from "@/app/components/likes/create_likes";
import { CommentButtonWrapper } from "@/app/components/buttonWrapper/comment-button-wrapper";

export const Social = ({ userId, postId }) => {
  return (
    <div className="flex justify-between">
      <div>
        <CreateLikesForm userId={userId} postId={postId} />
      </div>
      <div>
        <CommentButtonWrapper postId={postId}>
          <button type="button">
            <FaRegCommentAlt className="inline mx-2" />
            Comment
          </button>
        </CommentButtonWrapper>
      </div>
    </div>
  );
};
