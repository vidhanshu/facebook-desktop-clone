"use client";

import {
  AiFillCamera,
  AiOutlineEye,
  AiOutlineHistory,
  AiOutlineSearch,
  AiOutlineWarning,
} from "react-icons/ai";
import { HiOutlineChevronDown, HiPencil } from "react-icons/hi";
import { useCallback, useEffect, useState } from "react";

import { BiArchiveIn } from "react-icons/bi";
import { BsCameraFill } from "react-icons/bs";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { TbDots } from "react-icons/tb";
import { usePathname } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState(getActiveTab(pathname));

  const [more, setMore] = useState(false);

  const handleMoreOutsideClick = useCallback(
    (event: any) => {
      if (more && !event.target.closest(".more-container")) {
        setMore(false);
      }
    },
    [more]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleMoreOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleMoreOutsideClick);
    };
  }, [more, handleMoreOutsideClick]);

  return (
    <div className="w-full min-h-screen h-full">
      <div className="h-[663px] bg-white shadow-sm">
        <div className="max-w-7xl h-full  m-auto">
          <div className="relative h-[60%] overflow-hidden rounded-b-lg">
            <Image
              fill
              className="object-cover"
              src="https://images.unsplash.com/photo-1504078160216-30fc3097c100?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80"
              alt="Layout"
            />
            <div className="flex flex-col gap-2 absolute bottom-5 right-5 z-0">
              <button className="bg-black/50 hover:bg-black/60 active:scale-95 text-white flex items-center gap-2 p-2 rounded-md">
                <RxAvatar size={20} />
                Create with avatar
              </button>
              <button className="bg-black/50 hover:bg-black/60 active:scale-95 text-white flex items-center gap-2 p-2 rounded-md">
                <BsCameraFill size={20} /> Edit cover photo
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center -translate-y-6">
              <div className="w-fit relative">
                <Image
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-white"
                  src="https://avatars.githubusercontent.com/u/56132780?v=4"
                  alt="Layout"
                />
                <button className="icon-btn-effect absolute bottom-4 right-4 bg-gray-100 border-2 border-white">
                  <AiFillCamera size={25} />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Vidhanshu Borade</h1>
                <p className="text-gray-600 font-semibold">397 friends</p>

                <div className="flex relative w-fit">
                  <Image
                    width={40}
                    height={40}
                    className={"rounded-full border-2 border-white"}
                    src="https://avatars.githubusercontent.com/u/56132780?v=4"
                    alt="Layout"
                  />
                  <Image
                    width={40}
                    height={40}
                    className={
                      "rounded-full border-2 border-white -translate-x-2"
                    }
                    src="https://avatars.githubusercontent.com/u/56132780?v=4"
                    alt="Layout"
                  />
                  <Image
                    width={40}
                    height={40}
                    className={
                      "rounded-full border-2 border-white -translate-x-4"
                    }
                    src="https://avatars.githubusercontent.com/u/56132780?v=4"
                    alt="Layout"
                  />
                  <Image
                    width={40}
                    height={40}
                    className={
                      "rounded-full border-2 border-white -translate-x-6"
                    }
                    src="https://avatars.githubusercontent.com/u/56132780?v=4"
                    alt="Layout"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-end gap-2">
              <button className="rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 active:scale-95 active:bg-blue-800 flex justify-center items-center gap-2 text-white">
                <IoMdAdd size={20} /> Add to story
              </button>
              <button className="rounded-md py-2 px-4 bg-gray-200 hover:bg-gray-300 active:scale-95 active:bg-gray-400 flex justify-center items-center gap-2">
                <HiPencil size={20} /> Edit Layout
              </button>
              <button className="rounded-md py-2 px-4 bg-gray-200 hover:bg-gray-300 active:scale-95 active:bg-gray-400 flex justify-center items-center gap-2">
                <HiOutlineChevronDown size={25} />
              </button>
            </div>
          </div>

          <hr className="my-1 bg-slate-300 border-none h-[1px]" />

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="relative">
                <button
                  className={`px-4 py-3 font-semibold active:bg-gray-200 hover:bg-gray-100 rounded-md ${
                    activeTab === 0 ? "text-blue-500" : "text-gray-600"
                  }`}
                >
                  Posts
                </button>
                {activeTab == 0 && (
                  <div className="absolute -bottom-2 left-0 w-full h-1 mt-2 rounded-t-full bg-blue-500" />
                )}
              </div>
              <div className="relative">
                <button
                  className={`px-4 py-3 font-semibold active:bg-gray-200 hover:bg-gray-100 rounded-md ${
                    activeTab === 1 ? "text-blue-500" : "text-gray-600"
                  }`}
                >
                  About
                </button>
                {activeTab == 1 && (
                  <div className="absolute -bottom-2 left-0 w-full h-1 mt-2 rounded-t-full bg-blue-500" />
                )}
              </div>
              <div className="relative">
                <button
                  className={`px-4 py-3 font-semibold active:bg-gray-200 hover:bg-gray-100 rounded-md ${
                    activeTab === 2 ? "text-blue-500" : "text-gray-600"
                  }`}
                >
                  Friends
                </button>
                {activeTab == 2 && (
                  <div className="absolute -bottom-2 left-0 w-full h-1 mt-2 rounded-t-full bg-blue-500" />
                )}
              </div>
              <div className="relative">
                <button
                  className={`px-4 py-3 font-semibold active:bg-gray-200 hover:bg-gray-100 rounded-md ${
                    activeTab === 3 ? "text-blue-500" : "text-gray-600"
                  }`}
                >
                  Photos
                </button>
                {activeTab == 3 && (
                  <div className="absolute -bottom-2 left-0 w-full h-1 mt-2 rounded-t-full bg-blue-500" />
                )}
              </div>
              <div className="relative">
                <button
                  className={`px-4 py-3 font-semibold active:bg-gray-200 hover:bg-gray-100 rounded-md ${
                    activeTab === 4 ? "text-blue-500" : "text-gray-600"
                  }`}
                >
                  Videos
                </button>
                {activeTab == 4 && (
                  <div className="absolute -bottom-2 left-0 w-full h-1 mt-2 rounded-t-full bg-blue-500" />
                )}
              </div>
              <div className="relative">
                <button
                  className={`px-4 py-3 font-semibold active:bg-gray-200 hover:bg-gray-100 rounded-md ${
                    activeTab === 5 ? "text-blue-500" : "text-gray-600"
                  }`}
                >
                  Check-ins
                </button>
                {activeTab == 5 && (
                  <div className="absolute -bottom-2 left-0 w-full h-1 mt-2 rounded-t-full bg-blue-500" />
                )}
              </div>
              <div className="relative">
                <button
                  className={`px-4 py-3 font-semibold active:bg-gray-200 hover:bg-gray-100 rounded-md ${
                    activeTab === 6 ? "text-blue-500" : "text-gray-600"
                  }`}
                >
                  More
                </button>
                {activeTab == 6 && (
                  <div className="absolute -bottom-2 left-0 w-full h-1 mt-2 rounded-t-full bg-blue-500" />
                )}
              </div>
            </div>

            <div className="relative more-container">
              <button
                onClick={() => setMore((p) => !p)}
                className="px-4 py-3 font-semibold bg-gray-50 active:bg-gray-200 hover:bg-gray-100 rounded-md"
              >
                <TbDots size={20} />
              </button>
              {more && (
                <div className=" px-4 py-2 rounded-md absolute w-[200px] top-[120%] right-0 bg-white shadow-xl z-10">
                  <button className="w-full clickable-flexed">
                    <AiOutlineEye size={20} /> View as
                  </button>
                  <button className="w-full clickable-flexed">
                    <AiOutlineSearch size={20} /> Search
                  </button>
                  <button className="w-full clickable-flexed">
                    <AiOutlineWarning size={20} /> Account status
                  </button>
                  <button className="w-full clickable-flexed">
                    <BiArchiveIn size={20} /> Archive
                  </button>
                  <button className="w-full clickable-flexed">
                    <AiOutlineHistory size={20} /> Story archive
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl h-full  m-auto">{children}</div>
    </div>
  );
}

export default Layout;

const getActiveTab = (pathname: string) => {
  const splitted = pathname.split("/");
  if (splitted.length == 3) {
    pathname = splitted[2];
  } else {
    pathname = "/";
  }
  switch (pathname) {
    case "/":
      return 0;
    case "about":
      return 1;
    case "friends":
      return 2;
    case "photos":
      return 3;
    case "videos":
      return 4;
    case "check-ins":
      return 5;
    default:
      return 0;
  }
};
