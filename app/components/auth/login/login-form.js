"use client";

import React from "react";
import { useFormState } from "react-dom";
import { LogginButton } from "./loggin-button";
import { authenticate } from "@/actions/login";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const initialState = {
  message: "",
  error: "",
};

export const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, initialState);
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <form
        action={formAction}
        className="w-[400px] bg-white flex flex-col space-y-4 p-4 rounded-lg shadow-md "
      >
        <h3 className="text-center">Login to account</h3>
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
          {state?.errors && (
            <p className="w-full py-1 px-4 text-white bg-red-500 rounded-lg">
              {state?.errors}
            </p>
          )}
          {state?.message && (
            <p className="w-full py-1 px-4 text-white bg-green-500 rounded-lg">
              {state?.message}
            </p>
          )}
        </div>
        <div>
          <LogginButton />
        </div>
        <hr />
        <div>
          <FcGoogle className="w-full cursor-pointer text-5xl border border-solid rounded-lg" />
        </div>
        <div className="text-center">
          <Link href="/auth/registration">Don't have account?</Link>
        </div>
      </form>
    </div>
  );
};
