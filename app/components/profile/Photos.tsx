"use client";

import Image from "next/image";
import React from "react";

function Photos() {
  return (
    <div className="bg-white rounded-md shadow-md p-4 mt-4">
      <h1 className="font-semibold text-lg mb-4">Photos</h1>

      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
          return (
            <div
              key={e}
              className="h-[150px] rounded-md overflow-hidden relative"
            >
              <Image
                fill
                className="object-cover rounded-md hover:bg-opacity-95 hover:scale-105 cursor-pointer transition-all"
                src="https://avatars.githubusercontent.com/u/56132780?v=4"
                alt="profile"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
