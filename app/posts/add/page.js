import React from "react";
import { auth } from "@/auth";

import { CreatePostForm } from "@/app/components/posts/create_post";

const Page = async () => {
  const session = await auth();
  const userId = session?.user.id;
  const username = session?.user.name;
  return <CreatePostForm userId={userId} username={username} />;
};

export default Page;
