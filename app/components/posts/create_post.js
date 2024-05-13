"use client";

import React from "react";
import Link from "next/link";
import { useFormState } from "react-dom";

import { createPost } from "@/actions/create_post";
import { CreatePostButton } from "./create-post-button";

export const CreatePostForm = ({ userId }) => {
  const [state, formAction] = useFormState(createPost, undefined);
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        action={formAction}
        className="w-1/2 h-1/2 flex flex-col space-y-4 p-4 rounded-2xl shadow-md border border-gray-200"
      >
        <h3 className="text-center">Add post</h3>
        <div>
          <input type="hidden" name="userId" value={userId} />
        </div>
        <div>
          <label htmlFor="body">
            Body
            <textarea
              name="body"
              id="body"
              placeholder="Post body"
              className="w-full block border rounded-lg focus:outline-none focus:ring focus:ring-gray-300 py-2 px-4 text-gray-500"
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
