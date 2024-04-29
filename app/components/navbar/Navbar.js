import React from "react";
import Link from "next/link";

import { ButtonWrapper } from "../buttonWrapper/button-wrapper";
import { SignOutButton } from "../buttonWrapper/signout-wrapper";
import { auth } from "@/auth";
import { navItems } from "./nav-items";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="w-full bg-white p-3">
      <nav>
        <ul className="grid grid-flow-col justify-items-center">
          {navItems.map((item) => (
            <div key={item.name} className="flex gap-2">
              <li>
                <Link href={`${item.path}`}>{item.icon}</Link>
              </li>
            </div>
          ))}
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
