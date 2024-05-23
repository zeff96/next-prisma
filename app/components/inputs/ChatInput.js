import React from 'react'

import React, { useState, useRef } from 'react';
import { BiSolidImageAdd, MdOutlineKeyboardVoice, IoMdSend } from 'react-icons/bi'; // Assuming you're using react-icons

export const ChatInput = () => {
  const [text, setText] = useState('');
  const textAreaRef = useRef(null);

  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-grow relative">
        <textarea
          ref={textAreaRef}
          value={text}
          onChange={handleTextAreaChange}
          className="flex-grow resize-none rounded-2xl border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute inset-y-0 flex items-center right-2">
          <BiSolidImageAdd className="mr-2 text-gray-500 hover:text-blue-500" />
          <MdOutlineKeyboardVoice className="mr-2 text-gray-500 hover:text-blue-500" />
          {text && <IoMdSend />}
        </div>
      </div>
    </div>
  );
};

