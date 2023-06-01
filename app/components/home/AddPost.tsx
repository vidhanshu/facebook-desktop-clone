"use client";

import {
  BsCameraVideoFill,
  BsEmojiWink,
  BsFillImageFill,
} from "react-icons/bs";

import CreatePost from "../modals/CreatePost";
import Divider from "../Divider";
import Image from "next/image";
import Modal from "../modals/Modal";
import { useState } from "react";

function AddPost() {
  const [modal, setModal] = useState(false);

  const [caption, setCaption] = useState("");

  return (
    <div className="px-4 py-3 bg-white rounded-md shadow-md mt-4">
      <div className="flex gap-2">
        <Image
          width={40}
          height={40}
          className="rounded-full border-2"
          src="https://avatars.githubusercontent.com/u/56132780?v=4"
          alt="profile"
        />
        <button
          onClick={() => {
            setModal(true);
          }}
          className="rounded-full text-left px-2 bg-gray-100 w-full hover:bg-gray-200 active:bg-gray-300"
        >
          What&apos;s on your mind, Vidhanshu ?
        </button>
      </div>

      <Divider className="my-3" />

      <div className="flex">
        <button className="flex-1 clickable-l-flexed justify-center">
          <BsCameraVideoFill color="#f02948" size={25} />
          Live video
        </button>
        <button className="flex-1 clickable-l-flexed justify-center">
          <BsFillImageFill color="#77cf8c" size={25} />
          Photo/video
        </button>
        <button className="flex-1 clickable-l-flexed justify-center">
          <BsEmojiWink color="#f6b929" size={25} />
          Feeling/activity
        </button>
      </div>

      {/* modal */}
      {modal && (
        <Modal
          buttonTitle="submit"
          onClose={() => {
            setModal(false);
          }}
          onSubmit={() => {}}
          title="Create a post"
          disabled={caption.length === 0}
        >
          <CreatePost setCaption={setCaption} caption={caption} />
        </Modal>
      )}
    </div>
  );
}

export default AddPost;
