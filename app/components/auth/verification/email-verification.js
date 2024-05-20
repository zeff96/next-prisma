"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useFormState } from "react-dom";

import { EmailVerificationButton } from "./verification-button";
import { verifyEmail } from "@/actions/email-verification";

export const EmailVerificationForm = () => {
  const [state, action] = useFormState(verifyEmail, undefined);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        action={action}
        className="w-[400px] flex flex-col space-y-4 p-4 rounded-lg shadow-md "
      >
        <h3 className="text-center">Verify email account</h3>
        <div>
          <input type="hidden" name="token" value={token} />
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
          <EmailVerificationButton />
        </div>
        <hr />
        <div className="text-center underline">
          <Link href="/auth/login">Back to login page</Link>
        </div>
      </form>
    </div>
  );
};
