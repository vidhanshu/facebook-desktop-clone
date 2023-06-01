"use client";
import RecentSearchCard from "./RecentSearchCard";

function Recents() {
  return (
    <div className="w-full rounded-md absolute bg-white top-[125%] left-0 p-4 shadow-md flex flex-col">
      {[1, 2, 3].map((_, i) => (
        <RecentSearchCard key={i} />
      ))}
    </div>
  );
}

export default Recents;
