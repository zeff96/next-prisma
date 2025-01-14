"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { LogginButton } from "./loggin-button";
import { authenticate } from "@/actions/login";
import Link from "next/link";
import { Social } from "../social/social";
import toast from "react-hot-toast";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Another account already exists with the same e-mail address"
      : "";
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        action={async (formData) => {
          const res = await authenticate(formData);
          if (res.errors) {
            toast.error(res.errors);
          } else {
            toast.success(res.message);
          }
        }}
        className="w-[400px] flex flex-col space-y-4 p-4 rounded-lg shadow-md text-gray-500"
      >
        <h3 className="text-center">Welcome back</h3>
        <div>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="doe@example.com"
              className="w-full block border rounded-lg focus:outline-none focus:ring focus:ring-gray-300 py-2 px-4"
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              id="password"
              placeholder="******"
              className="w-full block border rounded-lg focus:outline-none focus:ring focus:ring-gray-300 py-2 px-4"
            />
          </label>
        </div>
        <div>
          <LogginButton />
        </div>
        <hr />
        <Social />
        <div className="text-center underline">
          <Link href="/auth/registration">Don't have account?</Link>
        </div>
        <div className="text-center underline">
          <Link href="/auth/reset_password">Forgot password?</Link>
        </div>
        <div className="text-center underline">
          <Link href="/auth/confirmation">
            Didn't receive confirmation email?
          </Link>
        </div>
      </form>
    </div>
  );
};
