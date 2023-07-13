import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { VideoCard } from "./VideoCard";

export const AllMovies = () => {
  const movies = useSelector((state: RootState) => state.movies);

  return (
    <div className="pr-8">
      <h1 className="text-[2rem] font-[300] text-white tracking-[-0.03125rem] mb-[1.5rem] ">
        All Movies
      </h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[2.5rem] ">
        {movies &&
          movies
            .filter((item) => item.category === "Movie")
            .map((item, idx) => <VideoCard movie={item} key={idx} />)}
      </div>
    </div>
  );
};
