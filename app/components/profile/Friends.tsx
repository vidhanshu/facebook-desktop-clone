"use client";

import Friend from "./Friend";
import React from "react";

function Friends() {
  return (
    <div className="bg-white rounded-md shadow-md p-4 mt-4">
      <h1 className="font-semibold text-lg">Friends</h1>
      <p className="mb-4 text-sm">397 freinds</p>

      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
          return <Friend key={e} />;
        })}
      </div>
    </div>
  );
}

export default Friends;
