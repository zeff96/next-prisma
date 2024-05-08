import React from "react";
import { useFormStatus } from "react-dom";
import { AiOutlineSend } from "react-icons/ai";

export const CommentsButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="absolute bottom-3 right-5 hover:text-blue-500 hover:bg-gray-800 hover:rounded-full p-2"
    >
      <AiOutlineSend />
    </button>
  );
};
