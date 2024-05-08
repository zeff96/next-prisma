import React from "react";

export const CommentsCount = ({ count }) => {
  return (
    <>
      {count > 0 && (
        <div className="inline-flex items-center gap-x-2">
          <span>{count}</span>
          <span>{count > 1 ? "comments" : "comment"}</span>
        </div>
      )}
    </>
  );
};
