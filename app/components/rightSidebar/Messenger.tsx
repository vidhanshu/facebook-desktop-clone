"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CgMaximizeAlt } from "react-icons/cg";
import Image from "next/image";
import { MdVideoCall } from "react-icons/md";

function Messenger() {
  return (
    <div
      className="absolute top-[125%] min-w-[350px] overflow-y-auto -right-16  z-20 bg-white rounded-md shadow-xl"
      style={{ maxHeight: "calc(100vh - 80px)" }}
    >
      <div className="px-4 pt-2 flex justify-between items-center">
        <h1>Chats</h1>
        <div className="flex gap-1">
          <div className="icon-btn-effect">
            <BiDotsHorizontalRounded className="text-gray-500" size={25} />
          </div>
          <div className="icon-btn-effect">
            <MdVideoCall className="text-gray-500" size={25} />
          </div>
          <div className="icon-btn-effect">
            <CgMaximizeAlt className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      <div className="flex-1 justify-center flex items-center menu-container p-4">
        <div className="bg-gray-100 hover:bg-gray-200 flex items-center rounded-full px-2 py-1 gap-3 max-w-2xl w-full relative">
          <AiOutlineSearch color="gray" size={19} />
          <input
            placeholder="Search Facebook"
            type="text"
            className="focus:outline-none bg-transparent w-full"
          />
        </div>
      </div>

      <div className="px-4 py-1">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 25, 26,
        ].map((item) => (
          <div className="clickable-flexed gap-3" key={item}>
            <div className="relative w-[30px] h-[30px] rounded-full">
              <Image
                width={30}
                height={30}
                className="rounded-full"
                src="https://avatars.githubusercontent.com/u/56132780?v=4"
                alt="profile"
              />
              <div className="absolute left-0 top-0 border-[1px] bg-green-500 w-3 h-3 rounded-full" />
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold text-base">Prajwal Meshram</p>
              <p className="text-sm text-gray-500">Hi how are you?</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messenger;
