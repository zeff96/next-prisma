import React from "react";
import Link from "next/link";

import { ButtonWrapper } from "../buttonWrapper/button-wrapper";
import { SignOutButton } from "../buttonWrapper/signout-wrapper";
import { auth } from "@/auth";
import { navItems } from "./nav-items";
import { SiBloglovin } from "react-icons/si";

const Navbar = async () => {
  const session = await auth();

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
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={`${item.path}`} className="text-2xl">
                  {item.icon}
                </Link>
              </li>
            ))}
          </div>
          <div className="justify-self-end">
            {session ? (
              <li>
                <SignOutButton />
              </li>
            ) : (
              <li>
                <ButtonWrapper>
                  <button type="button">Sign in</button>
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
