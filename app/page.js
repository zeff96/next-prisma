import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

import { Posts } from "./posts/get/Post";
import { CreatePostButtonWrapper } from "./components/buttonWrapper/create-post-wrapper";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <main className="w-full min-h-screen flex flex-col items-center py-5">
      <div className="w-1/2 rounded-lg  p-3">
        {session && (
          <div className="flex items-center gap-x-2 mb-3">
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
            <CreatePostButtonWrapper>
              <input
                type="text"
                placeholder={`What is on your mind ${session?.user?.name}?`}
                className="w-full border border-solid border-gray-200 rounded-2xl py-3 px-4"
              />
            </CreatePostButtonWrapper>
          </div>
        )}
        <Posts />
      </div>
    </main>
  );
}
