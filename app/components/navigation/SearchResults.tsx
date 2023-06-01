"use client";

import React from "react";
import SearchResultCard from "./SearchResultCard";

function SearchResults() {
  return (
    <div className="w-full rounded-md absolute bg-white top-[125%] left-0 p-4 shadow-md flex flex-col">
      {[1, 2, 3].map((_, i) => (
        <SearchResultCard key={i} />
      ))}
    </div>
  );
}

export default SearchResults;
