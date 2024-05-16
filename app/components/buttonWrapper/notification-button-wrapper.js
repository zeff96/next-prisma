"use client";

import React from "react";
import { useRouter } from "next/navigation";

export const NotificationButtonWrapper = ({ id, postId, children }) => {
  const router = useRouter();

  const handleClick = async () => {
    try {
      const response = await fetch("/api/notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        router.push(`/posts/${postId}`);
      } else {
        console.error("Failed to update notification");
      }
    } catch (error) {
      console.error("Failed to update notification", error);
    }
  };

  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
};
