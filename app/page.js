"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h2>{session.user.name}</h2>
        <p>{session.user.email}</p>
      </>
    );
  }
}
