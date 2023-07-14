import { Icons } from "./ui/Icons";

export const VideoCard = ({ movie }: { movie: IMovie }) => {
  return (
    <div className="flex flex-col">
      <div
        className="text-white relative bg-cover rounded-lg overflow-hidden flex flex-wrap bg-no-repeat aspect-[1.6/1] hover:bg-blend-overlay hover:bg-white hover:bg-opacity-5 hover:cursor-pointer transition-all duration-500 "
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
