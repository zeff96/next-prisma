"use client";

import React from "react";
import { useFormStatus } from "react-dom";

export const ConfirmationButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="w-full bg-zinc-900 py-2 px-4 text-white rounded-lg hover:bg hover:bg-zinc-500 focus:outline-none"
    >
      Send confirmation token
    </button>
  );
};
