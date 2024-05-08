"use client";

import { useRouter } from "next/navigation";

export const CreatePostButtonWrapper = ({ children }) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/posts");
  };

  return (
    <span className="flex-1" onFocus={onClick}>
      {children}
    </span>
  );
};
