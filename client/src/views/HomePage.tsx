import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { SearchBar } from "../components/SearchBar";
import { Trending } from "../components/Trending";
import { Recommended } from "../components/Recommended";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/async/moviesThunk";
import { AppDispatch, RootState } from "../store/store";
import { AllMovies } from "../components/AllMovies";

export const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentPage = useSelector((state: RootState) => state.nav.currentPage);
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div className="h-full bg-darkblue flex">
      <NavBar />
      <div className="flex flex-col overflow-x-hidden overflow-y-scroll w-full">
        <SearchBar />
        {currentPage === 0 && (
          <>
            <Trending />
            <Recommended />
          </>
        )}
        {currentPage === 1 && (
          <>
            <AllMovies />
          </>
        )}
      </div>
    </div>
  );
};
