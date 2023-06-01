"use client";

import { FaFacebookMessenger, FaUserCheck } from "react-icons/fa";
import { useRef, useState } from "react";

import Image from "next/image";

function Friend() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className="relative"
      onMouseOver={() => {
        if (ref.current) ref.current.style.display = "block";
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.display = "none";
      }}
    >
      <div className="h-[150px] rounded-md overflow-hidden relative">
        <Image
          fill
          className="object-cover rounded-md hover:bg-opacity-95 hover:scale-105 cursor-pointer transition-all"
          src="https://avatars.githubusercontent.com/u/56132780?v=4"
          alt="profile"
        />
      </div>

      {/* hover card */}
      <div
        ref={ref}
        className="absolute hidden  rounded-md top-0 left-0 bg-white p-4 shadow-2xl border-[1px] z-20"
      >
        <div className="flex gap-2 items-center mb-4">
          <Image
            width={80}
            height={80}
            className="object-cover rounded-full border-4 border-white hover:bg-opacity-95 hover:scale-105 cursor-pointer transition-all"
            src="https://avatars.githubusercontent.com/u/56132780?v=4"
            alt="profile"
          />

          <h1 className="font-bold text-lg">Vidhanshu Borade</h1>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-md py-2 px-4 bg-gray-200 hover:bg-gray-300 active:scale-95 active:bg-gray-400 flex justify-center items-center gap-2">
            <FaUserCheck size={20} /> Friends
          </button>
          <button className="rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 active:scale-95 active:bg-blue-800 flex justify-center items-center gap-2 text-white">
            <FaFacebookMessenger color="white" size={20} /> Messenger
          </button>
        </div>
      </div>
    </div>
  );
}

export default Friend;
