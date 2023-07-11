import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

export const Recommended = () => {
  const movies = useSelector((state: RootState) => state.movies);

  return <div></div>;
};
