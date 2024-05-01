"use client";

import { useRouter } from "next/navigation";

export const CreatePostButtonWrapper = ({ children }) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/posts/add");
  };

  return <span onFocus={onClick}>{children}</span>;
};
