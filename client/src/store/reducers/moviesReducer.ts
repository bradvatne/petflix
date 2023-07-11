import { createSlice } from "@reduxjs/toolkit";

const initialState: IMovie[] = [];

export const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    setMovies: (state, action) => {
      return action.payload;
    },
    // Other movie-related reducers if needed
  },
});
