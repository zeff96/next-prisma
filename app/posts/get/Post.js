import { getAllPosts } from "@/data/posts";
import React from "react";
import Social from "./social/Social";

export const Posts = async () => {
  const posts = await getAllPosts();

  if (posts.length === 0) {
    return <h2>No posts found!</h2>;
  }

  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className="border border-solid border-gray-300 rounded-2xl p-3 mb-3"
        >
          <p>{post.body}</p>
          <hr className="my-3" />
          <Social />
        </div>
      ))}
    </>
  );
};
