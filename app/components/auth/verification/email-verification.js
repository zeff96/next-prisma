"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { EmailVerificationButton } from "./verification-button";
import { verifyEmail } from "@/actions/email-verification";
import toast from "react-hot-toast";

export const EmailVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        action={async (formData) => {
          const res = await verifyEmail(formData);

          if (res.message) {
            toast.success(res.message);
          } else {
            toast.error(res.errors);
          }
        }}
        className="w-[400px] flex flex-col space-y-4 p-4 rounded-lg shadow-md "
      >
        <h3 className="text-center">Verify email account</h3>
        <div>
          <input type="hidden" name="token" value={token} />
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
