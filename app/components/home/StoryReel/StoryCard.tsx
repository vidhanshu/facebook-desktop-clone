"use client";

import Image from "next/image";
import { IoMdAdd } from "react-icons/io";

type StoryCardProps = {
  firstCard?: boolean;
};
function StoryCard({ firstCard = false }: StoryCardProps) {
  if (firstCard) {
    return (
      <div className="border-2 overflow-hidden rounded-md min-w-[125px] h-[200px] bg-black relative cursor-pointer">
        <Image
          fill
          className="object-cover hover:scale-105 transition-all duration-200 ease-in-out hover:opacity-90"
          src="https://avatars.githubusercontent.com/u/56132780?v=4"
          alt=""
        />
        <div className="bg-white w-full h-12 absolute bottom-0">
          <div className="absolute m-auto -top-4 left-0 right-0 border-2 border-white bg-blue-500 rounded-full w-8 h-8 flex justify-center items-center">
            <IoMdAdd size={20} color="white" />
          </div>

          <span className="absolute left-0 m-auto right-0 bottom-2 font-semibold text-center w-full text-black text-xs">
            Create story
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="border-2 overflow-hidden rounded-md min-w-[125px] h-[200px] bg-black relative cursor-pointer">
      <Image
        fill
        className="object-cover  hover:scale-105 transition-all duration-200 ease-in-out hover:opacity-90"
        src="https://avatars.githubusercontent.com/u/56132780?v=4"
        alt=""
      />
      <div className="p-1 cursor-pointer bg-white rounded-full absolute top-5 left-5">
        <Image
          width={40}
          height={40}
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/56132780?v=4"
          alt=""
        />
      </div>
      <span className="absolute bottom-2 font-semibold text-center w-full text-white text-xs">
        Vidhanshu Borade
      </span>
    </div>
  );
}

export default StoryCard;
