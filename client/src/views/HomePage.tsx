import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { SearchBar } from "../components/SearchBar";
import { Trending } from "../components/Trending";
import { Recommended } from "../components/Recommended";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/async/moviesThunk";
import { AppDispatch, RootState } from "../store/store";
import { AllMovies } from "../components/AllMovies";
import { TVShows } from "../components/TVShows";
import { Bookmarked } from "../components/Bookmarked";

export const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentPage = useSelector((state: RootState) => state.nav.currentPage);
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div className="h-full bg-darkblue flex lg:flex-row flex-col ">
      <NavBar />
      <div className="flex flex-col overflow-x-hidden overflow-y-scroll w-full p-4 md:p-[1.5rem] lg:p-0">
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
        {currentPage === 2 && (
          <>
            <TVShows />
          </>
        )}
        {currentPage === 3 && (
          <>
            <Bookmarked />
          </>
        )}
      </div>
    </div>
  );
};
