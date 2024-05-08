"use client";

import React from "react";
import { useFormState } from "react-dom";

import { createComment } from "@/actions/comments";
import { CommentsButton } from "./comments-button";

export const CommentsForm = ({ userId, postId, username }) => {
  const [state, action] = useFormState(createComment, undefined);
  return (
    <form action={action} className="flex-1 z-100">
      <input type="hidden" name="userId" value={userId} />
      <input type="hidden" name="postId" value={postId} />
      <input type="hidden" name="username" value={username} />
      <div className="relative">
        <textarea
          name="body"
          id="body"
          placeholder="Write a public comment..."
          required
          className="w-full bg-zinc-500 block rounded-2xl focus:outline-none py-2 px-4 resize-none overflow-y-auto"
        ></textarea>
        <CommentsButton />
      </div>
      {state?.errors && (
        <p className="w-full py-1 px-4 text-white bg-red-500 rounded-lg">
          {state?.errors}
        </p>
      )}
    </form>
  );
};
