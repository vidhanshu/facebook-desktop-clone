"use client";

import { AiFillHeart, AiFillLike, AiOutlineLike } from "react-icons/ai";
import React, { useState } from "react";

import { BiComment } from "react-icons/bi";
import Divider from "../Divider";
import { FaLaughSquint } from "react-icons/fa";
import Image from "next/image";
import { IoEarthSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { RxDotsHorizontal } from "react-icons/rx";
import { TbShare3 } from "react-icons/tb";

function PostCard() {
  const [showLikeOptions, setShowLikeOptions] = useState(false);

  return (
    <div className="bg-white rounded-md shadow-md">
      <div className="flex justify-between">
        <div className="p-4 flex gap-2 items-start">
          <Image
            width={40}
            height={40}
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/56132780?v=4"
            alt="profile"
          />
          <div>
            <span className="font-semibold">Vidhanshu Borade</span>
            <span className="flex items-center text-xs">
              9 h . <IoEarthSharp className="ml-1" size={12} color="gray" />
            </span>
          </div>
        </div>

        <div className="p-4 flex gap-2">
          <RxDotsHorizontal
            className="icon-btn-effect"
            color="#65676b"
            size={20}
          />
          <IoMdClose className="icon-btn-effect" color="#65676b" size={20} />
        </div>
      </div>

      <div>
        <p className="p-4 pt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>

        <div className="bg-gray-200">
          <Image
            height={600}
            width={680}
            alt="post"
            className="m-auto"
            src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
          />
        </div>

        <div className="px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-600 font-light">
            <AiFillLike size={20} className="text-blue-600" /> 119.3k
          </div>

          <span className="text-gray-500 font-light">657 comments</span>
        </div>

        <div className="px-4">
          <Divider className="my-1" />
        </div>

        <div className="flex p-2">
          <button
            onMouseOver={() => {
              setShowLikeOptions(true);
            }}
            onMouseLeave={() => {
              setShowLikeOptions(false);
            }}
            className="relative flex-1 clickable-flexed justify-center text-gray-600"
          >
            <AiOutlineLike size={20} /> Like
            {showLikeOptions && (
              <div className="-top-[105%] absolute px-4 py-2 flex bg-white gap-2 border-2 rounded-full">
                <AiFillLike
                  size={25}
                  className="text-blue-600 hover:scale-110 transition-all hover:-translate-y-1"
                  onClick={() => {
                    setShowLikeOptions(false);
                  }}
                />
                <AiFillHeart
                  size={25}
                  className="text-pink-600 hover:scale-110 transition-all hover:-translate-y-1"
                  onClick={() => {
                    setShowLikeOptions(false);
                  }}
                />
                <FaLaughSquint
                  size={25}
                  className="text-orange-500 hover:scale-110 transition-all hover:-translate-y-1"
                  onClick={() => {
                    setShowLikeOptions(false);
                  }}
                />
              </div>
            )}
          </button>
          <button className="flex-1 clickable-flexed justify-center text-gray-600">
            <BiComment size={20} /> Comment
          </button>
          <button className="flex-1 clickable-flexed justify-center text-gray-600">
            <TbShare3 size={20} /> Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
