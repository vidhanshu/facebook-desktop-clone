"use client";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import React, { useRef, useState } from "react";

import PeopleCard from "./PeopleCard";

function PeopleYouKnow() {
  const [scroll, setScroll] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white rounded-md shadow-sm my-4 relative">
      <h1 className="text-[#647074] font-semibold p-4">People you may know</h1>

      <div
        ref={scrollRef}
        onScroll={(e) => {
          setScroll(e.currentTarget.scrollLeft);
        }}
        className="no-scroll-bar px-4 flex gap-2 overflow-x-auto"
      >
        {[0, 1, 2, 3, 4, 5, 6].map((e) => (
          <PeopleCard key={e} />
        ))}

        {scroll > 0 && (
          <div
            className="top-[35%] w-16 h-16 flex justify-center items-center bg-white icon-btn-effect absolute rounded-full left-5"
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollLeft =
                  scrollRef.current.scrollLeft - 300;
              } else {
              }
            }}
          >
            <BsChevronLeft size={20} />
          </div>
        )}
        {scrollRef.current &&
          scrollRef.current.scrollWidth - scrollRef.current.scrollLeft >
            scrollRef.current.clientWidth && (
            <div
              className="top-[35%] w-16 h-16 flex justify-center items-center bg-white icon-btn-effect absolute rounded-full right-5"
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollLeft =
                    scrollRef.current.scrollLeft + 300;
                }
              }}
            >
              <BsChevronRight size={20} />
            </div>
          )}
      </div>

      <div className="p-4">
        <button className="clickable-flexed w-full flex justify-center items-center text-blue-500">
          See all
        </button>
      </div>
    </div>
  );
}

export default PeopleYouKnow;
