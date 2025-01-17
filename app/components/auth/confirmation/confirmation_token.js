"use client";

import React from "react";
import Link from "next/link";
import { ConfirmationButton } from "./confirmation-button";
import { confirmationToken } from "@/actions/confirmation_token";
import toast from "react-hot-toast";

export const ConfirmationToken = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <form
        action={async (formData) => {
          const res = await confirmationToken(formData);
          if (res.errors) {
            toast(res.errors);
          } else {
            toast(res.message);
          }
        }}
        className="w-[400px] flex flex-col space-y-4 p-4 rounded-lg shadow-md text-gray-500"
      >
        <h3 className="text-center">Email token confirmation</h3>
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
          <ConfirmationButton />
        </div>
        <hr />
        <div className="text-center underline">
          <Link href="/auth/login">Back to login page</Link>
        </div>
      </form>
    </div>
  );
};
