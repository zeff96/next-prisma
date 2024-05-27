import React from "react";

import React, { useState } from "react";
import {
  BiSolidImageAdd,
  MdOutlineKeyboardVoice,
  IoMdSend,
} from "react-icons/bi"; // Assuming you're using react-icons

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
        className="resize-none w-full border rounded-lg p-2 pb-10 overflow-hidden" // Added pr-10 for the send icon space
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
