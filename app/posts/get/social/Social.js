import React from "react";
import { BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex justify-between">
      <button type="button">
        <BiLike className="inline mx-2 text-xl" />
        Like
      </button>
      <button type="button">
        <FaRegCommentAlt className="inline mx-2" />
        Comment
      </button>
    </div>
  );
};

export default Social;
