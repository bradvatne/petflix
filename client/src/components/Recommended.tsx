import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { VideoCard } from "./VideoCard";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";

export const Recommended = () => {
  const recommended = useSelector((state: RootState) => state.movies);
  const searchState = useSelector((state: RootState) => state.search);
  const [searchResults, setSearchResults] = useState(recommended);

  useEffect(() => {
    if (recommended && recommended.length > 0) {
      const fuse = new Fuse(recommended, {
        keys: ["title"], // Adjust according to your data
        includeScore: true,
      });

      if (searchState) {
        const results = fuse.search(searchState);
        setSearchResults(results.map(({ item }) => item));
      } else {
        setSearchResults(recommended);
      }
    }
  }, [recommended, searchState]);

  return (
    <div className="pr-8">
      <h1 className="text-[2rem] font-[300] text-white tracking-[-0.03125rem] mt-[2.5rem] mb-[1.5rem]">
        Recommended
      </h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[2.5rem]">
        {searchResults &&
          searchResults.map((item, idx) => (
            <VideoCard movie={item} key={idx} />
          ))}
      </div>
    </div>
  );
};
