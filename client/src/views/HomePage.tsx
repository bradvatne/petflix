import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { SearchBar } from "../components/SearchBar";
import { Trending } from "../components/Trending";
import { Recommended } from "../components/Recommended";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/async/moviesThunk";
import { AppDispatch, RootState } from "../store/store";

export const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div className="h-full bg-darkblue flex">
      <NavBar />
      <div className="flex flex-col overflow-x-hidden overflow-y-scroll">
        <SearchBar />
        <Trending />
        <Recommended />
      </div>
    </div>
  );
};
