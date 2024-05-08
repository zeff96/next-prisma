import React from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

import { auth } from "@/auth";
import { getPostById } from "@/data/posts";
import { TimeAgo } from "@/app/components/timeAgo/TimeAgo";
import { Social } from "../get/social/Social";
import { LikesPage } from "@/app/like/LikesPage";
import { CommentsForm } from "@/app/components/comments/comments-form";
import { CommentsCount } from "@/app/components/comments/CommentsCount";

const Page = async ({ params }) => {
  const { id } = params;

  const session = await auth();
  const user = session?.user;

  const post = await getPostById(id);

  return (
    <div className="w-full flex justify-center py-3">
      <div className="w-1/2 border border-solid border-gray-300 rounded-2xl p-3 mb-3">
        <div className="flex items-center gap-x-2 mb-3">
          {post.user.image ? (
            <Image
              src={post.user.image}
              alt={post.user.name}
              width={40}
              height={40}
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
        <div className="flex justify-between">
          <LikesPage count={post._count.likes} />
          <CommentsCount count={post._count.comments} />
        </div>
        <hr className="my-3" />
        {session && (
          <Social userId={user.id} postId={post.id} username={user.name} />
        )}
        <hr className="my-3" />
        <div className="flex items-center gap-x-2">
          {session?.user.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name}
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
            />
          ) : (
            <FaUserCircle className="text-3xl" />
          )}
          <CommentsForm
            userId={user.id}
            postId={post.id}
            username={user.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
