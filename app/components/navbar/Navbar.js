import React from "react";
import Link from "next/link";

import { GoHome } from "react-icons/go";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { SiBloglovin } from "react-icons/si";

import { ButtonWrapper } from "../buttonWrapper/button-wrapper";
import { SignOutButton } from "../buttonWrapper/signout-wrapper";
import { auth } from "@/auth";
import { getNotificationCounts } from "@/lib/notifications";

const Navbar = async () => {
  const session = await auth();

  const count = await getNotificationCounts(session?.user.id);

  return (
    <header className="w-full">
      <nav>
        <ul className="flex justify-between py-3 px-5">
          <div>
            <Link href="/" className="text-2xl">
              <SiBloglovin />
            </Link>
          </div>
          <div className="flex gap-x-8">
            <li>
              <Link href="/">
                <GoHome className="text-2xl" />
              </Link>
            </li>
            <li className="relative">
              <Link href="/notifications">
                <IoNotificationsCircleOutline className="text-2xl" />
                {session?.user && count > 0 && (
                  <span className="w-5 h-5 px-1 bg-red-500 rounded-full text-center text-white text-sm absolute -top-2 -end-2">
                    {count}
                  </span>
                )}
              </Link>
            </li>
          </div>
          <div className="justify-self-end">
            {session ? (
              <li>
                <SignOutButton />
              </li>
            ) : (
              <li>
                <ButtonWrapper>
                  <button type="button">Login</button>
                </ButtonWrapper>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
