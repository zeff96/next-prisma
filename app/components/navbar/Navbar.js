import React from "react";
import { SignIn } from "../signin/sign-in";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <SignIn />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
