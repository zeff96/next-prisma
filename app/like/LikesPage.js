import React from "react";
import { BiLike } from "react-icons/bi";

export const LikesPage = ({ count }) => {
  return (
    <>
      {count > 0 && (
        <div className="inline-flex items-center">
          <span className="inline-flex items-center justify-center bg-red-800 rounded-full w-4 h-4">
            <BiLike className="text-white w-3 h-3" />
          </span>
          <span className="ml-2">{count}</span>
        </div>
      )}
    </>
  );
};
