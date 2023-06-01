"use client";

import { AiOutlineSearch, AiOutlineUserSwitch } from "react-icons/ai";
import { BsGift, BsThreeDots } from "react-icons/bs";

import { HiOutlineSpeakerphone } from "react-icons/hi";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { MdVideoCall } from "react-icons/md";

function RightSidebar() {
  return (
    <div
      className={`flex-1 max-xl:hidden max-w-[400px]`}
      style={{
        height: "calc(100vh - 56px)",
      }}
    >
      <div
        className="fixed top top-[56px] right-0 p-4 overflow-y-auto w-[400px] max-xl:w-[350px]"
        style={{
          height: "calc(100vh - 56px)",
        }}
      >
        <div className="mb-4">
          <h1 className="font-semibold text-[#3c3e3e] mb-4">
            Your pages and profiles
          </h1>

          <div className="clickable-flexed">
            <div className="w-8 h-8 rounded-full bg-green-300 flex justify-center items-center">
              <span className="text-green-600">V</span>
            </div>
            <p className="text-sm font-semibold">Test</p>
          </div>

          <div className="clickable-flexed text-gray-600">
            <AiOutlineUserSwitch size={20} className="text-gray-600" />
            Switch into page
          </div>
          <div className="clickable-flexed text-gray-600">
            <HiOutlineSpeakerphone size={20} className="text-gray-600" />
            Create promotion
          </div>
        </div>

        <h1 className="font-semibold text-[#3c3e3e] mb-4">Birthdays</h1>

        <div className="clickable-flexed mb-4">
          <BsGift size={20} className="text-blue-600" />
          <p className="text-sm">
            <b>Vidhanshu Borade</b> & <b>Rakesh siti</b> have their birthday
            today.
          </p>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-[#3c3e3e] mb-4">Contacts</h1>
            <div className="flex gap-2">
              <div className="icon-btn-effect-sm">
                <MdVideoCall />
              </div>
              <div className="icon-btn-effect-sm">
                <AiOutlineSearch />
              </div>
              <div className="icon-btn-effect-sm">
                <BsThreeDots />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
              <div className="clickable-flexed gap-2" key={item}>
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

                <p className="font-semibold text-base">Prajwal Meshram</p>
              </div>
            ))}
          </div>

          <div>
            <h1 className="font-semibold text-[#3c3e3e] my-4">
              Group Conversations
            </h1>

            <div className="clickable-flexed">
              <div className="rounded-full bg-gray-200 p-2">
                <IoMdAdd size={20} />
              </div>
              <p>Create New Group</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
