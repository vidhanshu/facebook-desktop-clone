"use client";

import { AiFillHome, AiFillShopping } from "react-icons/ai";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { BsLink45Deg } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import Image from "next/image";
import { MdGroups2 } from "react-icons/md";
import { RiMovieFill } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";

function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [active, setActive] = useState<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>(
    getActiveTab(pathname)
  );

  const isSmall = useMediaQuery({ query: "(max-width: 1400px)" });

  useEffect(() => {
    if (pathname.includes("profile") || isSmall) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [isSmall, pathname]);

  return (
    <div
      className={`relative ${
        !collapsed ? "flex-1 min-w-[400px]" : "min-w-[80px]"
      } max-w-[400px]`}
    >
      <div
        className={`p-4 h-full flex flex-col gap-2 fixed top-[56px] w-${
          collapsed ? 9 : "[400px]"
        }  ${collapsed ? "bg-white" : ""}`}
      >
        <Option
          icon={AiFillHome}
          title="Home"
          active={active === 0}
          collapsed={collapsed}
          onClick={() => {
            setActive(0);
            router.push("/");
          }}
        />

        <Option
          image={
            <Image
              width={30}
              height={30}
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/56132780?v=4"
              alt="profile"
            />
          }
          title="Vidhanshu Borade"
          collapsed={collapsed}
          onClick={() => {
            setActive(1);
            router.push("/profile");
          }}
          active={active === 1}
        />

        <hr className={`w-full border-none p-0 h-[.5px] bg-gray-300`} />

        <Option
          icon={RiMovieFill}
          title="Watch"
          collapsed={collapsed}
          onClick={() => {
            setActive(2);
            router.push("/watch");
          }}
          notificationCount={2}
          active={active === 2}
        />

        <Option
          icon={AiFillShopping}
          title="Marketplace"
          collapsed={collapsed}
          onClick={() => {
            setActive(3);
          }}
          active={active === 3}
        />
        <Option
          icon={FaGamepad}
          title="Gaming"
          collapsed={collapsed}
          onClick={() => {
            setActive(4);
          }}
          active={active === 4}
        />

        <Option
          icon={TbGridDots}
          title="See all"
          collapsed={collapsed}
          onClick={() => {
            setActive(5);
          }}
          active={active === 5}
        />

        <hr className={`w-full border-none p-0 h-[.5px] bg-gray-300`} />

        <Option
          icon={MdGroups2}
          title="See all groups"
          collapsed={collapsed}
          onClick={() => {
            setActive(6);
          }}
          active={active === 6}
        />

        <hr className={`w-full border-none p-0 h-[.5px] bg-gray-300`} />

        <Option
          icon={BsLink45Deg}
          title="See all shortcuts"
          collapsed={collapsed}
          onClick={() => {
            setActive(7);
          }}
          active={active === 7}
        />
      </div>
    </div>
  );
}

export default LeftSidebar;

type OptionProps = {
  icon?: IconType;
  collapsed: boolean;
  title: string;
  onClick: () => void;
  notificationCount?: number;
  active?: boolean;
  image?: ReactNode;
};
const Option: FC<OptionProps> = ({
  icon,
  title,
  onClick = () => {},
  notificationCount,
  collapsed,
  active,
  image,
}) => {
  return (
    <div
      className={`relative clickable-flexed flex items-center  ${
        collapsed ? "justify-center" : "justify-between"
      }`}
      onClick={onClick}
    >
      <span className="flex gap-2 items-center">
        {icon && icon({ size: 20, className: "text-blue-600" })}
        {image && image}
        {!collapsed && <p>{title}</p>}
      </span>

      {notificationCount && (
        <span
          className={`absolute ${
            collapsed ? "-top-2 -right-2" : "right-2"
          } bg-red-600 text-white rounded-full p-1 text-xs w-5 h-5 flex justify-center items-center`}
        >
          {notificationCount}
        </span>
      )}

      {active && (
        <div className="bg-blue-500 h-full w-2 rounded-r-full absolute -left-5" />
      )}
    </div>
  );
};

const getActiveTab = (path: string) => {
  switch (path) {
    case "/":
      return 0;
    case "/profile":
      return 1;
    case "/watch":
      return 2;
    default:
      return 0;
  }
};
