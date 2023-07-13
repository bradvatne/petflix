import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { VideoCard } from "./VideoCard";
import Fuse from "fuse.js";

export const Bookmarked = () => {
  const bookmarked = useSelector((state: RootState) => state.movies);
  const searchState = useSelector((state: RootState) => state.search);
  const [searchResults, setSearchResults] = useState(bookmarked);

  useEffect(() => {
    if (bookmarked && bookmarked.length > 0) {
      const fuse = new Fuse(bookmarked, {
        keys: ["title"], // Adjust according to your data
        includeScore: true,
      });

      if (searchState) {
        const results = fuse.search(searchState);
        setSearchResults(results.map(({ item }) => item));
      } else {
        setSearchResults(bookmarked);
      }
    }
  }, [bookmarked, searchState]);
  return (
    <>
      <div className="lg:pr-8">
        <h1 className="text-[2rem] font-[300] text-white tracking-[-0.03125rem] mb-[1.5rem] ">
          Bookmarked Movies
        </h1>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[2.5rem] ">
          {searchResults &&
            searchResults
              .filter((item) => item.isBookmarked && item.category === "Movie")
              .map((item, idx) => <VideoCard movie={item} key={idx} />)}
        </div>
      </div>
      <div className="lg:pr-8">
        <h1 className="text-[2rem] font-[300] text-white tracking-[-0.03125rem] mt-[2.5rem] mb-[1.5rem] ">
          Bookmarked TV Series
        </h1>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[2.5rem] ">
          {searchResults &&
            searchResults
              .filter(
                (item) => item.isBookmarked && item.category === "TV Series"
              )
              .map((item, idx) => <VideoCard movie={item} key={idx} />)}
        </div>
      </div>
    </>
  );
};
