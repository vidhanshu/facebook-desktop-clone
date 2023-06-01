"use client";

import { AiFillHome } from "react-icons/ai";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import React from "react";

function Intro() {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <h1 className="font-semibold text-lg">Intro</h1>
      <p className="text-center mb-4">Nothing for bio</p>
      <button className="justify-center w-full clickable-flexed bg-gray-100">
        Edit bio
      </button>

      <div className="p-4">
        <div className="flex gap-2 items-center mb-2">
          <AiFillHome color="gray" size={20} /> Lives in <b>Nagpur</b>
        </div>
        <div className="flex gap-2 items-center">
          <IoLocationSharp color="gray" size={20} /> From <b>Nagpur</b>
        </div>
      </div>

      <button className="justify-center w-full clickable-flexed bg-gray-100">
        Edit details
      </button>

      <div>
        <div className="flex gap-2 flex-wrap p-4">
          {[0, 1, 2].map((e) => {
            return (
              <button
                className="flex gap-2 items-center rounded-full border-[1px] p-2 hover:bg-gray-100 active:bg-gray-200"
                key={e}
              >
                <MdEdit size={20} /> Sketching
              </button>
            );
          })}
        </div>
        <button className="justify-center w-full clickable-flexed bg-gray-100">
          Edit hobbies
        </button>
      </div>

      <div className="mt-4">
        <div className="h-[300px] w-[150px] relative mb-4 bg-black rounded-md overflow-hidden">
          <Image
            fill
            className="object-cover rounded-md hover:bg-opacity-95 hover:scale-105 cursor-pointer transition-all"
            src="https://avatars.githubusercontent.com/u/56132780?v=4"
            alt="profile"
          />

          <p className="absolute left-5 bottom-2 text-white">+3</p>
        </div>
        <button className="justify-center w-full clickable-flexed bg-gray-100">
          Edit features
        </button>
      </div>
    </div>
  );
}

export default Intro;
