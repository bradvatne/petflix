import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

export const Trending = () => {
  const movies = useSelector((state: RootState) =>
    state.movies.filter((movie) => movie.isTrending)
  );

  return (
    <div className="overflow-hidden">
      <h1 className="text-[2rem] font-[300] text-white tracking-[-0.03125rem]">
        Trending
      </h1>
      <div className="flex overflow-x-hidden">
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
      <div className="w-[470px] text-white">{movie.title}</div>
    </div>
  );
};
