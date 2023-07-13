import Fuse from "fuse.js";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { VideoCard } from "./VideoCard";
import { useEffect, useState } from "react";

export const AllMovies = () => {
  const movies = useSelector((state: RootState) =>
    state.movies.filter((item) => item.category === "Movie")
  );
  const searchState = useSelector((state: RootState) => state.search);
  const [searchResults, setSearchResults] = useState(movies);

  useEffect(() => {
    if (movies && movies.length > 0) {
      const fuse = new Fuse(movies, {
        keys: ["title"], // Adjust according to your data
        includeScore: true,
      });

      if (searchState) {
        const results = fuse.search(searchState);
        setSearchResults(results.map(({ item }) => item));
      } else {
        setSearchResults(movies);
      }
    }
  }, [movies, searchState]);

  return (
    <div className="lg:pr-8">
      <h1 className="text-[2rem] font-[300] text-white tracking-[-0.03125rem] mb-[1.5rem] ">
        All Movies
      </h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[2.5rem] ">
        {searchResults &&
          searchResults.map((item, idx) => (
            <VideoCard movie={item} key={idx} />
          ))}
      </div>
    </div>
  );
};
