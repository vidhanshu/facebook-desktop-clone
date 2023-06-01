"use client";

import React, { Dispatch, FC, SetStateAction } from "react";

import { AiFillTags } from "react-icons/ai";
import { BiImages } from "react-icons/bi";
import { BsEmojiWink } from "react-icons/bs";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";

type CreatePostProps = {
  caption: string;
  setCaption: Dispatch<SetStateAction<string>>;
};
const CreatePost: FC<CreatePostProps> = ({ caption, setCaption }) => {
  return (
    <div className="w-[500px]">
      <div className="flex gap-2 p-4 items-center">
        <Image
          width={30}
          height={30}
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/56132780?v=4"
          alt="profile"
        />
        <p className="text-gray-600 font-semibold">Vidhanshu Borade</p>
      </div>

      <div className="p-4">
        <textarea
          className="focus:outline-none w-full placeholder:text-2xl resize-none text-gray-700 text-lg mb-4"
          name="caption"
          id=""
          cols={30}
          rows={5}
          placeholder="What's on your mind, Vidhanshu?"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        <div className="rounded-lg py-2 px-4 border-[1px] flex justify-between items-center gap-2">
          <h1 className="font-semibold">Add your post</h1>
          <div className="flex gap-1">
            <div className="icon-btn-effect">
              <BiImages size={25} color="#77cf8c" className="cursor-pointer" />
            </div>
            <div className="icon-btn-effect">
              <AiFillTags
                size={25}
                color="#1876f3"
                className="cursor-pointer"
              />
            </div>
            <div className="icon-btn-effect">
              <BsEmojiWink
                size={25}
                color="#f6b828"
                className="cursor-pointer"
              />
            </div>
            <div className="icon-btn-effect">
              <MdLocationOn
                size={25}
                color="#f5523c"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
