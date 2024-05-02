import { Posts } from "./posts/get/Post";
import { CreatePostButtonWrapper } from "./components/buttonWrapper/create-post-wrapper";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <main className="w-full min-h-screen flex flex-col items-center py-5">
      <div className="w-1/2 rounded-lg  p-3">
        {session && (
          <CreatePostButtonWrapper>
            <input
              type="text"
              placeholder="What is on your mind?"
              className="w-full border border-solid border-gray-200 rounded-2xl py-2 px-4 mb-3"
            />
          </CreatePostButtonWrapper>
        )}
        <Posts />
      </div>
    </main>
  );
}
