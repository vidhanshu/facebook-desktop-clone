"use client";

import React, { FC, ReactNode } from "react";

import { AiOutlineClose } from "react-icons/ai";

type ModalProps = {
  buttonTitle: string;
  onSubmit: () => void;
  onClose: () => void;
  title: string;
  disabled?: boolean;
  children: ReactNode;
};
const Modal: FC<ModalProps> = ({
  buttonTitle,
  title,
  disabled = false,
  onClose,
  onSubmit,
  children,
}) => {
  return (
    <div className="w-screen h-screen z-10 top-0 left-0 fixed flex justify-center items-center">
      <div className="bg-white rounded-md shadow-md min-w-[400px]">
        <div className=" p-4 relative font-semibold h-14 flex justify-center items-center text-lg border-b-[1px]">
          {title}

          <div
            onClick={onClose}
            className="icon-btn-effect absolute top-2 right-2"
          >
            <AiOutlineClose />
          </div>
        </div>

        {/* overlay */}
        <div
          onClick={onClose}
          className="w-screen h-screen -z-10 top-0 left-0 fixed bg-gray-300/50"
        />

        <div className="z-10">{children}</div>

        <div className="p-4">
          <button
            onClick={onSubmit}
            disabled={disabled}
            className={`clickable-flexed w-full ${
              !disabled
                ? "bg-blue-500 text-white hover:bg-blue-600 active:scale-95"
                : "bg-gray-300 text-gray-400"
            } flex justify-center items-center rounded-md`}
          >
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
