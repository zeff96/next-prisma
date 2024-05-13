import React from "react";
import { auth } from "@/auth";

import { CreatePostForm } from "@/app/components/posts/create_post";

const Page = async () => {
  const session = await auth();
  const userId = session?.user.id;
  return <CreatePostForm userId={userId} />;
};

export default Page;
