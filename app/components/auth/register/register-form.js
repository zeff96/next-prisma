"use client";

import React from "react";
import { useFormState } from "react-dom";
import { RegistrationButton } from "./signup-button";
import { register } from "@/actions/register";
import Link from "next/link";
import { Social } from "../social/social";

export const SignupForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        action={formAction}
        className="w-[400px] flex flex-col space-y-4 p-4 rounded-lg shadow-md "
      >
        <h3 className="text-center">Create account</h3>
        <div>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Jane"
              className="w-full block border rounded-lg focus:outline-none focus:ring focus:ring-gray-300 py-2 px-4"
            />
          </label>
        </div>
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
            Password <em>(minimum length 6)</em>
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
          <RegistrationButton />
        </div>
        <hr />
        <Social />
        <div className="text-center underline">
          <Link href="/auth/login">Already registered?</Link>
        </div>
      </form>
    </div>
  );
};
