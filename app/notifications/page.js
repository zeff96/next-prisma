import React from "react";
import { auth } from "@/auth";
import { Notifications } from "../components/notifications/notifications";

const Page = async () => {
  const session = await auth();
  const userId = session?.user.id;
  return <Notifications userId={userId} />;
};

export default Page;
