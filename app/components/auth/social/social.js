"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const onClick = (provider) => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="w-full flex gap-x-2">
      <button
        type="button"
        onClick={() => onClick("google")}
        className="w-full border rounded-lg py-2 px-4"
      >
        <FcGoogle className="w-full h-5" />
      </button>
      <button
        type="button"
        onClick={() => onClick("github")}
        className="w-full border rounded-lg py-2 px-4"
      >
        <FaGithub className="w-full h-5" />
      </button>
    </div>
  );
};
