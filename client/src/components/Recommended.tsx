import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

export const Recommended = () => {
  const movies = useSelector((state: RootState) =>
    state.movies.filter((movie) => movie.isTrending)
  );

  return <div>{movies && movies.map((item) => <div>{item.title}</div>)}</div>;
};
