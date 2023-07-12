import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";
import { Icons } from "./ui/Icons";

export const Recommended = () => {
  const movies = useSelector((state: RootState) => state.movies);

  return (
    <div className="pr-8">
      <h1 className="text-[2rem] font-[300] text-white tracking-[-0.03125rem] mt-[2.5rem] mb-[1.5rem]">
        Recommended
      </h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[2.5rem]">
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
    <div className="flex flex-col basis-1/4 lg:basis-1/5 xl:basis-1/6 flex-grow flex-shrink ">
      <div
        className="text-white relative bg-cover rounded-lg overflow-hidden flex flex-wrap bg-no-repeat aspect-[1.6/1] "
        style={{ backgroundImage: `url(${movie.thumbnail.regular.large})` }}
      >
        <div className="flex w-full justify-end">
          <div className="mt-4 mr-6 hover:cursor-pointer">
            <Icons.BookMarkOutline />
          </div>
        </div>
      </div>
      <div className="text-white">
        <div className="flex gap-2 text-[0.8125rem] opacity-75 items-center shrink-0 mt-[0.5rem]">
          {movie.year}
          <Icons.Dot />
          <div className="flex gap-[.3rem] items-center shrink-0 whitespace-nowrap">
            <Icons.MovieSmall />
            {movie.category}
          </div>
          <Icons.Dot />
          {movie.rating}
        </div>
        <div className="text-[1.125rem] font-[500] whitespace-nowrap">
          {movie.title}
        </div>
      </div>
    </div>
  );
};
