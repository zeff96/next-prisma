import React from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

import { getAllPosts } from "@/data/posts";
import Social from "./social/Social";
import { TimeAgo } from "@/app/components/timeAgo/TimeAgo";
import { compareDesc } from "date-fns";
import { auth } from "@/auth";
import { LikesPage } from "@/app/like/LikesPage";

export const Posts = async () => {
  const session = await auth();
  const user = session?.user;

  const posts = await getAllPosts();

  if (posts.length === 0) {
    return <h2>No posts found!</h2>;
  }

  const orderedPosts = posts.sort((a, b) =>
    compareDesc(new Date(a.created_at), new Date(b.created_at))
  );

  return (
    <>
      {orderedPosts.map((post) => (
        <div
          key={post.id}
          className="border border-solid border-gray-300 rounded-2xl p-3 mb-3"
        >
          <div className="flex items-center gap-x-2 mb-3">
            {post.user.image ? (
              <Image
                src={post.user.image}
                alt={post.user.name}
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
              />
            ) : (
              <FaUserCircle className="text-3xl" />
            )}
            <div>
              <span className="block font-bold">{post.user.name}</span>
              <TimeAgo timestamp={post.created_at} />
            </div>
          </div>
          <p className="mb-3">{post.body}</p>
          <div>
            <LikesPage count={post._count.likes} />
          </div>
          <hr className="my-3" />
          {session && (
            <Social userId={user.id} postId={post.id} username={user.name} />
          )}
        </div>
      ))}
    </>
  );
};
