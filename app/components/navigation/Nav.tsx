"use client";

import { IoCloseOutline, IoNotifications } from "react-icons/io5";
import { useCallback, useEffect, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import Messenger from "../rightSidebar/Messenger";
import Profile from "../rightSidebar/Profile";
import Recents from "./Recents";
import SearchResults from "./SearchResults";

function Nav() {
  const [messenger, setMessenger] = useState(false);
  const [profile, setProfile] = useState(false);

  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(false);

  const handleOutsideClick = useCallback(
    (event: any) => {
      if (focused && !event.target.closest(".menu-container")) {
        setFocused(false);
      }
    },
    [focused]
  );

  const handleMessengerOutsideClick = useCallback(
    (event: any) => {
      if (messenger && !event.target.closest(".messenger-container")) {
        setMessenger(false);
      }
    },
    [messenger]
  );

  const handleProfileOutsideClick = useCallback(
    (event: any) => {
      if (profile && !event.target.closest(".profile-container")) {
        setProfile(false);
      }
    },
    [profile]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [focused, handleOutsideClick]);

  useEffect(() => {
    document.addEventListener("mousedown", handleMessengerOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleMessengerOutsideClick);
    };
  }, [messenger, handleMessengerOutsideClick]);

  useEffect(() => {
    document.addEventListener("mousedown", handleProfileOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleProfileOutsideClick);
    };
  }, [profile, handleProfileOutsideClick]);

  return (
    <nav className="bg-white sticky top-0 z-10 flex flex-row justify-between items-center py-2 px-4 shadow-md">
      {/* logo */}
      <Link href="/" className="text-blue-500 text-[30px] font-bold cursor-pointer">
        facebook
      </Link>

      {/* search */}
      <div className="flex-1 justify-center flex items-center menu-container">
        <div className="bg-gray-100 hover:bg-gray-200 flex items-center rounded-full p-2 gap-3 max-w-2xl w-full relative">
          <AiOutlineSearch color="gray" size={19} />
          <input
            placeholder="Search Facebook"
            type="text"
            className="focus:outline-none bg-transparent w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setFocused(true)}
          />
          {search !== "" && (
            <button
              className="icon-btn-effect-sm"
              onClick={() => {
                setSearch("");
                setFocused(false);
              }}
            >
              <IoCloseOutline size={19} />
            </button>
          )}

          {search !== "" && <SearchResults />}
          {search === "" && focused && <Recents />}
        </div>
      </div>

      {/* profile */}
      <div className="flex flex-row gap-1">
        <div className="relative messenger-container">
          <button
            onClick={() => setMessenger(!messenger)}
            className={
              messenger
                ? "icon-btn-effect bg-blue-100"
                : "icon-btn-effect bg-gray-100"
            }
          >
            <BsMessenger
              size={19}
              className={messenger ? "text-blue-500" : ""}
            />
          </button>

          {messenger && <Messenger />}
        </div>
        <div className="icon-btn-effect bg-gray-100">
          <IoNotifications size={19} />
        </div>
        <div className="relative profile-container">
          <button
            onClick={() => setProfile(!profile)}
            className={`icon-btn-effect ${
              !profile ? "bg-gray-100" : "bg-blue-100"
            }`}
          >
            <Image
              width={30}
              height={30}
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/56132780?v=4"
              alt="profile"
            />
          </button>

          {profile && <Profile />}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
