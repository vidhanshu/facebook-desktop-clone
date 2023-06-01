"use client";

import Image from "next/image";
import { IoPersonAdd } from "react-icons/io5";

function PeopleCard() {
  return (
    <div className="my-2 min-w-[200px] overflow-hidden h-[300px] rounded-md shadow-md">
      <div className="relative h-[60%]">
        <Image
          fill
          className="object-cover"
          src="https://avatars.githubusercontent.com/u/56132780?v=4"
          alt="profile"
        />
      </div>
      <div className="py-2 px-4 flex flex-col gap-2">
        <p className="font-semibold">Vidhanshu Borade</p>

        <p className="text-sm font-light text-gray-500">8 mutual friends</p>

        <button className="text-blue-500 hover:bg-blue-100 active:scale-95 active:bg-blue-200 bg-blue-50 flex justify-center rounded-md p-2 items-center gap-2">
          <IoPersonAdd size={20} /> Add friend
        </button>
      </div>
    </div>
  );
}

export default PeopleCard;
