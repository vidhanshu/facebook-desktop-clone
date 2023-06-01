import AddPost from "./components/home/AddPost";
import PeopleYouKnow from "./components/home/peopleYouKnow/PeopleYouKnow";
import PostCard from "./components/home/PostCard";
import StoriesReels from "./components/home/StoryReel/StoriesReels";

function Home() {
  return (
    <div className="py-4 max-xl:w-full flex justify-center">
      <div className="w-2xl max-w-2xl">
        {/* stories / reels section */}
        <StoriesReels />

        {/* add post */}
        <AddPost />

        {/* friend section */}
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

export default Home;
