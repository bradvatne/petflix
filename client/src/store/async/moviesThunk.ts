import { createAsyncThunk } from "@reduxjs/toolkit";
import { setMovies } from "../reducers/moviesReducer";

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (_, { dispatch }) => {
    try {
      const response = await fetch("/api/movies/login");

      if (response.ok) {
        const jsonData = await response.json();
        dispatch(setMovies(jsonData));
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
