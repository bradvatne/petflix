import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";
import { Icons } from "./ui/Icons";

export const Recommended = () => {
  const movies = useSelector((state: RootState) => state.movies);

  return (
    <div className="">
      <h1 className="text-[2rem] font-[300] text-white tracking-[-0.03125rem] mt-[2.5rem] mb-[1.5rem]">
        Recommended
      </h1>
      <div className="flex flex-wrap gap-4 lg:gap-6 2xl:gap-10">
        {movies &&
          movies.map((item, idx) => (
            <RecommendedMovieCard movie={item} key={idx} />
          ))}
      </div>
    </div>
  );
};

const RecommendedMovieCard = ({ movie }: { movie: IMovie }) => {
  return (
    <div
      className="basis-1/4 lg:basis-1/5 xl:basis-1/6 aspect-[1.6/1] flex-grow flex-shrink text-white relative bg-cover rounded-lg overflow-hidden flex flex-wrap bg-no-repeat"
      style={{ backgroundImage: `url(${movie.thumbnail.regular.large})` }}
    >
      <div className="flex items-end h-full">
        <div className="ml-4 mb-4">
          <div className="flex gap-2 text-[0.9375rem] opacity-75 items-center shrink-0">
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
  );
};
