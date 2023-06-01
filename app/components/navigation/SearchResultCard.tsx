"use client";

import Image from "next/image";

const SearchResultCard = () => {
  return (
    <div className="px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer flex flex-row justify-between items-center">
      <div className="flex flex-row gap-3 items-center">
        <Image
          width={30}
          height={30}
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/56132780?v=4"
          alt="profile"
        />

        <div className="flex flex-col">
          <p>Vidhanshu Borade</p>
          <span className="text-sm text-gray-600">Friend</span>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
