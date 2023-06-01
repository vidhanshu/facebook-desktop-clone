"use client";

import { BsPlayFill } from "react-icons/bs";
import Image from "next/image";

function ReelCard() {
  return (
    <div className="shadow-md overflow-hidden rounded-md min-w-[125px] h-[200px] bg-black relative cursor-pointer">
      <Image
        fill
        className="object-cover  hover:scale-105 transition-all duration-200 ease-in-out hover:opacity-90"
        src="https://avatars.githubusercontent.com/u/56132780?v=4"
        alt=""
      />
      <span className="flex items-center absolute bottom-2 font-semibold text-center w-full text-white text-xs">
        <BsPlayFill className="ml-3" size={20} /> 11M
      </span>
    </div>
  );
}

export default ReelCard;
