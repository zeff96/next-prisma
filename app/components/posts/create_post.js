"use client";

import React from "react";
import Link from "next/link";
import { useFormState } from "react-dom";

import { createPost } from "@/actions/create_post";
import { CreatePostButton } from "./create-post-button";

export const CreatePostForm = ({ userId, username }) => {
  const [state, formAction] = useFormState(createPost, undefined);
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <form
        action={formAction}
        className="w-[400px] bg-white flex flex-col space-y-4 p-4 rounded-lg shadow-md "
      >
        <h3 className="text-center">Add post</h3>
        <div>
          <input type="hidden" name="userId" value={userId} />
        </div>
        <div>
          <input type="hidden" name="username" value={username} />
        </div>
        <div>
          <label htmlFor="body">
            Body
            <textarea
              name="body"
              id="body"
              placeholder="Post body"
              className="w-full block border rounded-lg focus:outline-none focus:ring focus:ring-gray-300 py-2 px-4"
            ></textarea>
          </label>
        </div>
        <div>
          {state?.errors && (
            <p className="w-full py-1 px-4 text-white bg-red-500 rounded-lg">
              {state?.errors}
            </p>
          )}
          {state?.message && (
            <p className="w-full py-1 px-4 text-white bg-green-500 rounded-lg">
              {state?.message}
            </p>
          )}
        </div>
        <div>
          <CreatePostButton />
        </div>
        <hr />
        <div className="text-center underline">
          <Link href="/">Back to posts</Link>
        </div>
      </form>
    </div>
  );
};
