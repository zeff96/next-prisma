"use client";

import React from "react";
import { useFormState } from "react-dom";

import { BiLike } from "react-icons/bi";
import { createLike } from "@/actions/likes";

const CreateLikesForm = ({ userId, postId, username }) => {
  const [state, action] = useFormState(createLike, undefined);
  return (
    <form action={action}>
      <input type="hidden" name="userId" value={userId} />
      <input type="hidden" name="postId" value={postId} />
      <input type="hidden" name="username" value={username} />
      {state?.errors && (
        <p className="w-full py-1 px-4 text-white bg-red-500 rounded-lg">
          {state?.errors}
        </p>
      )}
      <button type="submit">
        <BiLike className="inline mr-2" /> Like
      </button>
    </form>
  );
};

export default CreateLikesForm;
