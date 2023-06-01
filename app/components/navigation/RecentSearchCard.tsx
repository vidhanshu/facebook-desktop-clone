"use client";

import { IoCloseOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

const RecentSearchCard = () => {
  const onClose = () => {
    // TODO: remove from recents
  };

  return (
    <div className="p-2 hover:bg-gray-100 rounded-md cursor-pointer flex flex-row justify-between items-center">
      <div className="flex flex-row gap-3 items-center">
        <IoMdTime size={19} />

        <p>Vidhanshu Borade</p>
      </div>

      <button className="icon-btn-effect-sm" onClick={onClose}>
        <IoCloseOutline size={19} />
      </button>
    </div>
  );
};

export default RecentSearchCard;
