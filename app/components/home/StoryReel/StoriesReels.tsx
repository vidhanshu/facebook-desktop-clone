"use client";

import {
  BsCameraReelsFill,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { useRef, useState } from "react";

import Divider from "../../Divider";
import { FaBookOpen } from "react-icons/fa";
import ReelCard from "./ReelCard";
import StoryCard from "./StoryCard";

function StoriesReels() {
  const [tab, setTab] = useState(0);
  const [scroll, setScroll] = useState(0);

  const scrollDiv1Ref = useRef<HTMLDivElement>(null);
  const scrollDiv2Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="rounded-md shadow-md bg-white">
      {/* top tabs */}
      <div className="flex p-1">
        <div className="flex-1 relative">
          <button
            onClick={() => setTab(0)}
            className="clickable-l-flexed-no-p py-3 w-full flex justify-center items-center"
          >
            <FaBookOpen
              className={tab === 0 ? "text-blue-500" : "text-gray-500"}
              size={20}
            />
            Stories
          </button>
          {tab === 0 && (
            <div className="w-full h-[4px] bg-blue-500 absolute -bottom-1 rounded-tr-md rounded-tl-md" />
          )}
        </div>
        <div className="flex-1 relative">
          <button
            onClick={() => setTab(1)}
            className="clickable-l-flexed-no-p py-3 w-full flex justify-center items-center"
          >
            <BsCameraReelsFill
              className={tab === 1 ? "text-blue-500" : "text-gray-500"}
              size={20}
            />
            Reels
          </button>
          {tab === 1 && (
            <div className="w-full h-[4px] bg-blue-500 absolute -bottom-1 rounded-tr-md rounded-tl-md" />
          )}
        </div>
      </div>

      <Divider />

      {/* stories / reels */}
      {tab === 0 ? (
        <div className="p-4 relative">
          <div
            ref={scrollDiv1Ref}
            onScroll={(e) => setScroll(e.currentTarget.scrollLeft)}
            className="scroll-smooth no-scroll-bar w-full flex flex-row gap-2 overflow-x-auto relative"
          >
            <StoryCard firstCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
          </div>

          {scroll > 0 && (
            <div
              className="top-[45%] w-16 h-16 flex justify-center items-center bg-white icon-btn-effect absolute rounded-full left-5"
              onClick={() => {
                if (scrollDiv1Ref.current) {
                  scrollDiv1Ref.current.scrollLeft =
                    scrollDiv1Ref.current.scrollLeft - 200;
                } else {
                }
              }}
            >
              <BsChevronLeft size={20} />
            </div>
          )}
          {scrollDiv1Ref.current &&
            scrollDiv1Ref.current.scrollWidth -
              scrollDiv1Ref.current.scrollLeft >
              scrollDiv1Ref.current.clientWidth && (
              <div
                className="top-[45%] w-16 h-16 flex justify-center items-center bg-white icon-btn-effect absolute rounded-full right-5"
                onClick={() => {
                  if (scrollDiv1Ref.current) {
                    scrollDiv1Ref.current.scrollLeft =
                      scrollDiv1Ref.current.scrollLeft + 200;
                  }
                }}
              >
                <BsChevronRight size={20} />
              </div>
            )}
        </div>
      ) : (
        <div className="p-4 relative">
          <div
            ref={scrollDiv2Ref}
            onScroll={(e) => setScroll(e.currentTarget.scrollLeft)}
            className="scroll-smooth no-scroll-bar  flex flex-row gap-2 max-w-2xl overflow-x-auto relative"
          >
            <ReelCard />
            <ReelCard />
            <ReelCard />
            <ReelCard />
            <ReelCard />
            <ReelCard />
            <ReelCard />
            <ReelCard />
            <ReelCard />
            <ReelCard />
          </div>

          {scroll > 0 && (
            <div
              className="top-[45%] w-16 h-16 flex justify-center items-center bg-white icon-btn-effect absolute rounded-full left-5"
              onClick={() => {
                if (scrollDiv2Ref.current) {
                  scrollDiv2Ref.current.scrollLeft =
                    scrollDiv2Ref.current.scrollLeft - 200;
                } else {
                }
              }}
            >
              <BsChevronLeft size={20} />
            </div>
          )}
          {scrollDiv2Ref.current &&
            scrollDiv2Ref.current.scrollWidth -
              scrollDiv2Ref.current.scrollLeft >
              scrollDiv2Ref.current.clientWidth && (
              <div
                className="top-[45%] w-16 h-16 flex justify-center items-center bg-white icon-btn-effect absolute rounded-full right-5"
                onClick={() => {
                  if (scrollDiv2Ref.current) {
                    scrollDiv2Ref.current.scrollLeft =
                      scrollDiv2Ref.current.scrollLeft + 200;
                  }
                }}
              >
                <BsChevronRight size={20} />
              </div>
            )}
        </div>
      )}
    </div>
  );
}

export default StoriesReels;
