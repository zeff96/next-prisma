"use client";

import React, { useRef } from "react";
import Link from "next/link";
import ChatInput from "../inputs/ChatInput";

import { createPost } from "@/actions/create_post";
import { CreatePostButton } from "./create-post-button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const CreatePostForm = ({ userId }) => {
  const formRef = useRef();
  const router = useRouter();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        ref={formRef}
        action={async (formData) => {
          const res = await createPost(formData);
          if (res.errors) {
            toast.error(res.errors);
          } else {
            toast.success(res.message);
            formRef.current.reset();
            router.push("/");
          }
        }}
        className="w-1/2 h-1/2 flex flex-col space-y-4 p-4 rounded-2xl shadow-md border border-gray-200"
      >
        <h3 className="text-center">Add post</h3>
        <div>
          <input type="hidden" name="userId" value={userId} />
        </div>
        <div>
          <ChatInput />
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
