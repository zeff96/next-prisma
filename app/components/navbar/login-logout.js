"use client";

import { useState } from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

import { ButtonWrapper } from "../buttonWrapper/button-wrapper";
import { SignOutButton } from "../buttonWrapper/signout-wrapper";

export const AuthenticationComponent = ({ session }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleClick = () => {
    setShowDropDown((prev) => !prev);
  };

  return (
    <div className="justify-self-end">
      <div className="flex">
        {session?.user.image ? (
          <Image
            src={session?.user.image}
            alt={session?.user.name}
            width={30}
            height={30}
            style={{ borderRadius: "50%" }}
          />
        ) : (
          <FaUserCircle className="text-3xl" />
        )}
        <RiArrowDropDownLine
          className="text-2xl cursor-pointer self-end"
          onClick={handleClick}
        />
      </div>
      {showDropDown && (
        <div>
          {session ? (
            <SignOutButton />
          ) : (
            <ButtonWrapper>
              <button type="button">login</button>
            </ButtonWrapper>
          )}
        </div>
      )}
    </div>
  );
};
