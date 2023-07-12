import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/reducer";
import { Icons } from "./ui/Icons";
import { useEffect, useState } from "react";
import { setMovies } from "../store/reducers/moviesReducer";

export const Trending = () => {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((state: RootState) =>
    state.movies.filter((movie) => movie.isTrending)
  );

  const shiftCarouselLeft = () => {
    const [first, ...rest] = movies;
    const shiftedMovies = [...rest, first];
    dispatch(setMovies(shiftedMovies));
  };

  return (
    <div className="overflow-hidden">
      <h1 className="text-[2rem] font-[300] text-white tracking-[-0.03125rem] mb-[1.5rem]">
        Trending
      </h1>
      <div className="flex overflow-x-hidden gap-[2.5rem] relative">
        <button
          className="absolute w-12 bg-black opacity-5 hover:opacity-25 right-0 z-50 h-[230px]"
          onClick={() => shiftCarouselLeft()}
        >
          Click
        </button>
        {movies &&
          movies.map((item, idx) => (
            <TrendingMovieCard movie={item} key={idx} />
          ))}
      </div>
    </div>
  );
};

const TrendingMovieCard = ({ movie }: { movie: IMovie }) => {
  return (
    <div className="overflow-hidden flex shrink-0">
      <div
        className="w-[470px] h-[230px] text-white relative bg-contain rounded-lg overflow-hidden flex"
        style={{ backgroundImage: `url(${movie.thumbnail.trending.large})` }}
      >
        <div className="flex items-end ml-6 mb-6">
          <div>
            <div className="flex gap-2 text-[0.9375rem] opacity-75 items-center w-full shrink-0">
              {movie.year}
              <Icons.Dot />
              <div className="flex gap-[.3rem] items-center shrink-0 whitespace-nowrap">
                <Icons.MovieSmall />
                {movie.category}
              </div>
              <Icons.Dot />
              {movie.rating}
            </div>
            <div className="text-[1.5rem] font-[500] whitespace-nowrap">
              {movie.title}
            </div>
          </div>
        </div>

        <div className="flex w-full justify-end">
          <div className="mt-4 mr-6 hover:cursor-pointer">
            <Icons.BookMarkOutline />
          </div>
        </div>
      </div>
    </div>
  );
};
