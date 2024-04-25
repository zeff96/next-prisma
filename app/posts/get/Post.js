import { getAllPosts } from "@/data/posts";
import React from "react";

export const Posts = async () => {
  const posts = await getAllPosts();

  if (posts.length === 0) {
    return <h2>No posts found!</h2>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
