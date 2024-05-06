import React from "react";
import { useFormState } from "react-dom";
import { createComment } from "@/actions/comments";

export const commentsForm = ({ userId, postId, username }) => {
  const [state, action] = useFormState(createComment, undefined);
  return (
    <form action={action}>
      <input type="hidden" name="userId" value={userId} />
      <input type="hidden" name="postId" value={postId} />
      <input type="hidden" name="username" value={username} />
      <label htmlFor="body">
        Comment
        <textarea
          name="body"
          id="body"
          placeholder="Your comment"
          required
        ></textarea>
      </label>
      {state?.errors && (
        <p className="w-full py-1 px-4 text-white bg-red-500 rounded-lg">
          {state?.errors}
        </p>
      )}
      <button type="submit">Comment</button>
    </form>
  );
};
