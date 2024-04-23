import { Posts } from "./posts/get/Post";
import { CreatePostButtonWrapper } from "./components/buttonWrapper/create-post-wrapper";

export default function Home() {
  return (
    <main>
      <Posts />
      <CreatePostButtonWrapper>
        <button>Create post</button>
      </CreatePostButtonWrapper>
    </main>
  );
}
