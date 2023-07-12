import { createAsyncThunk } from "@reduxjs/toolkit";
import { setMovies } from "../reducers/moviesReducer";
import { setTrendingMovies } from "../reducers/trendingSlice";

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (_, { dispatch }) => {
    try {
      const response = await fetch("/api/movies/");

      if (response.ok) {
        const jsonData = await response.json();
        console.log("backend", jsonData);
        const movies = jsonData.response as IMovie[];
        dispatch(setMovies([...movies]));
        dispatch(setTrendingMovies(movies.filter((movie) => movie.isTrending)));
        return jsonData;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
);
