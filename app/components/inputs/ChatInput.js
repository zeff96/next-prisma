"use client";

import React, { useState } from "react";
import {
  BiSolidImageAdd,
  MdOutlineKeyboardVoice,
  IoMdSend,
} from "react-icons/bi";

/*
Create a ChatInput component that has a textarea input field and three icons for image upload, voice recording, and sending a message. The textarea should adjust its height based on the content inside it. The component should have the following features:
Send icon should be disabled when the textarea is empty.
Send icon should be enabled when the textarea has some content.
The textarea should adjust its height based on the content inside it.
Send icon should fire request to send the message when clicked.
*/

export const ChatInput = () => {
  const [text, setText] = useState("");
  const [textAreaHeight, setTextAreaHeight] = useState("auto");

  const handleChange = (event) => {
    setText(event.target.value);
    adjustTextAreaHeight(event.target);
  };

  const adjustTextAreaHeight = (textArea) => {
    textArea.style.height = "auto";
    textArea.style.height = `${textArea.scrollHeight}px`;
    setTextAreaHeight(`${textArea.scrollHeight}px`);
  };

  return (
    <div className="relative w-2/5">
      <textarea
        className="resize-none w-full border rounded-lg p-2 pb-10 overflow-hidden"
        value={text}
        onChange={handleChange}
        style={{ height: textAreaHeight }}
      />
      <div className="absolute right-2 bottom-2 font-bold">
        <BiSolidImageAdd />
        <MdOutlineKeyboardVoice />
        <IoMdSend />
      </div>
    </div>
  );
};
