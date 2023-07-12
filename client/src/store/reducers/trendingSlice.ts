import { createSlice } from "@reduxjs/toolkit";

const initialState: IMovie[] = [];

export const trendingSlice = createSlice({
  name: "trending",
  initialState: initialState,
  reducers: {
    setTrendingMovies: (state, action) => {
      return action.payload;
    },
    // Other movie-related reducers if needed
  },
});

export const { setTrendingMovies } = trendingSlice.actions;
