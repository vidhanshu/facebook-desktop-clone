"use client";

import { MdFeedback, MdHelp } from "react-icons/md";

import { AiOutlineRight } from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs";
import Divider from "../Divider";
import Image from "next/image";
import { IoLogOutSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";

function Profile() {
  return (
    <div className="absolute top-[130%] p-4 min-w-[350px] overflow-y-auto right-0  z-20 bg-white rounded-md shadow-xl">
      <div className="shadow-xl rounded-md p-2">
        <Link
          href="/profile"
          className="clickable-flexed justify-between items-center"
        >
          <div className="flex gap-2 items-center">
            <Image
              width={30}
              height={30}
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/56132780?v=4"
              alt="profile"
            />
            <h1 className="font-semibold">Vidhanshu Borade</h1>
          </div>

          <div className="border-2 border-gray-600 w-8 h-8 rounded-full bg-green-300 flex justify-center items-center">
            <span className="text-green-600">V</span>
          </div>
        </Link>
        <Divider className="my-2" />

        <div>
          <button
            className={`clickable-flexed relative w-full text-blue-600 hover:bg-gray-100 active:bg-gray-200 flex justify-between items-center rounded-md`}
          >
            See all profiles
            <span
              className={`absolute right-2 bg-red-600 text-white rounded-full p-1 text-xs w-5 h-5 flex justify-center items-center`}
            >
              2
            </span>
          </button>
        </div>
      </div>

      <div className="mt-4">
        <div className="clickable-flexed justify-between">
          <div className="flex gap-2 items-center">
            <div className="icon-btn-effect bg-gray-200">
              <IoMdSettings size={20} />
            </div>
            Settings & privacy
          </div>
          <AiOutlineRight color="gray" size={30} />
        </div>
        <div className="clickable-flexed justify-between">
          <div className="flex gap-2 items-center">
            <div className="icon-btn-effect bg-gray-200">
              <MdHelp size={20} />
            </div>
            Help & support
          </div>
          <AiOutlineRight color="gray" size={30} />
        </div>
        <div className="clickable-flexed justify-between">
          <div className="flex gap-2 items-center">
            <div className="icon-btn-effect bg-gray-200">
              <BsFillMoonFill size={20} />
            </div>
            Display & accessibility
          </div>
          <AiOutlineRight color="gray" size={30} />
        </div>
        <div className="clickable-flexed">
          <div className="icon-btn-effect bg-gray-200">
            <MdFeedback size={20} />
          </div>
          Give feedback
        </div>
        <div className="clickable-flexed">
          <div className="icon-btn-effect bg-gray-200">
            <IoLogOutSharp size={20} />
          </div>
          Logout
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-1">
        <p className="hover:underline text-xs text-gray-500 cursor-pointer">
          Privacy
        </p>
        .
        <p className="hover:underline text-xs text-gray-500 cursor-pointer">
          Terms
        </p>
        .
        <p className="hover:underline text-xs text-gray-500 cursor-pointer">
          Advertising
        </p>
        .
        <p className="hover:underline text-xs text-gray-500 cursor-pointer">
          Ad choice
        </p>
        .
        <p className="hover:underline text-xs text-gray-500 cursor-pointer">
          Cookie
        </p>
        .
        <p className="hover:underline text-xs text-gray-500 cursor-pointer">
          More
        </p>
        .
        <p className="hover:underline text-xs text-gray-500 cursor-pointer">
          © 2023
        </p>
      </div>
    </div>
  );
}

export default Profile;
