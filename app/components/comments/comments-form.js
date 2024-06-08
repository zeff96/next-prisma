"use client";

import React, { useRef } from "react";

import { createComment } from "@/actions/comments";
import { CommentsButton } from "./comments-button";
import toast from "react-hot-toast";

export const CommentsForm = ({ userId, postId }) => {
  const ref = useRef();
  return (
    <form
      ref={ref}
      action={async (formData) => {
        const res = await createComment(formData);
        if (res.errors) {
          toast.error(res.errors);
        } else {
          toast.success(res.message);
          ref.current.reset();
        }
      }}
    >
      <input type="hidden" name="userId" value={userId} />
      <input type="hidden" name="postId" value={postId} />
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
    </form>
  );
};
