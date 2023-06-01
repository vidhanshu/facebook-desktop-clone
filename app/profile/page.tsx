"use client";

import AddPost from "../components/home/AddPost";
import Friends from "../components/profile/Friends";
import Intro from "../components/profile/Intro";
import PeopleYouKnow from "../components/home/peopleYouKnow/PeopleYouKnow";
import Photos from "../components/profile/Photos";
import PostCard from "../components/home/PostCard";

function Page() {
  return (
    <div className="flex gap-2">
      <div className="flex-1 py-4">
        <Intro />

        <Photos />

        <Friends />
      </div>

      <div className="w-[60%]">
        <AddPost />

        <PeopleYouKnow />

        <div className="mt-4 flex flex-col gap-4">
          {[0, 1, 2, 3, 4].map((_, i) => (
            <PostCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
