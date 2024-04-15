import React from "react";
import { ButtonWrapper } from "../buttonWrapper/button-wrapper";

const Navbar = () => {
  return (
    <header className="w-full bg-white p-3">
      <nav>
        <ul className="grid grid-flow-col justify-items-center">
          <div className="flex gap-2">
            <li>Posts</li>
            <li>Notifications</li>
          </div>
          <div className="justify-self-end">
            <li>
              <ButtonWrapper>
                <button type="button">Sign in</button>
              </ButtonWrapper>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
