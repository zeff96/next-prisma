import { Posts } from "./posts/get/Post";
import { CreatePostButtonWrapper } from "./components/buttonWrapper/create-post-wrapper";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <main className="w-full min-h-screen flex flex-col items-center py-5 bg-gray-100">
      <div className="w-1/2 bg-white rounded-lg  p-3">
        <Posts />
        {session && (
          <CreatePostButtonWrapper>
            <button>Create post</button>
          </CreatePostButtonWrapper>
        )}
      </div>
    </main>
  );
}
