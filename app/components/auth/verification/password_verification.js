"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useFormState } from "react-dom";

import { EditPasswordButton } from "./password-verification-button";
import { passwordVerification } from "@/actions/password_verification";

export const PasswordVerification = () => {
  const [state, action] = useFormState(passwordVerification, undefined);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <form
        action={action}
        className="w-[400px] bg-white flex flex-col space-y-4 p-4 rounded-lg shadow-md "
      >
        <h3 className="text-center">Edit password</h3>
        <div>
          <input type="hidden" name="token" value={token} />
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
          <EditPasswordButton />
        </div>
        <hr />
        <div className="text-center underline">
          <Link href="/auth/login">Back to login page</Link>
        </div>
      </form>
    </div>
  );
};
