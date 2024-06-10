"use client";

import React from "react";

import { BiLike } from "react-icons/bi";
import { createLike } from "@/actions/likes";
import toast from "react-hot-toast";

const CreateLikesForm = ({ userId, postId }) => {
  return (
    <form
      action={async (formData) => {
        const res = await createLike(formData);
        if (res.errors) {
          toast.error(res.errors);
        } else {
          toast.success(res.message);
        }
      }}
    >
      <input type="hidden" name="userId" value={userId} />
      <input type="hidden" name="postId" value={postId} />
      <button type="submit">
        <BiLike className="inline mr-2" /> Like
      </button>
    </form>
  );
};

export default CreateLikesForm;
