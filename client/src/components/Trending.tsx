import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { Icons } from "./ui/Icons";
import { setTrendingMovies } from "../store/reducers/trendingSlice";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";

export const Trending = () => {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((state: RootState) => state.trending);
  const searchState = useSelector((state: RootState) => state.search);
  const [searchResults, setSearchResults] = useState(movies);

  const shiftCarouselLeft = () => {
    const [first, ...rest] = movies;
    const shiftedMovies = [...rest, first];
    dispatch(setTrendingMovies(shiftedMovies));
  };

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
    <div className="overflow-hidden shrink-0">
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
        {searchResults &&
          searchResults.map((item, idx) => (
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
        className="w-[470px] h-[230px] text-white relative bg-contain rounded-lg overflow-hidden flex shrink-0"
        style={{ backgroundImage: `url(${movie.thumbnail.trending.large})` }}
      >
        <div className="flex items-end ml-6 mb-6">
          <div>
            <div className="flex gap-2 text-[0.9375rem] opacity-75 items-center w-full">
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
