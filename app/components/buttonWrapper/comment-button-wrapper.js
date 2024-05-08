"use client";

import { useRouter } from "next/navigation";

export const CommentButtonWrapper = ({ children, postId }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/posts/${postId}`);
  };

  return (
    <span className="flex-1" onFocus={onClick}>
      {children}
    </span>
  );
};
