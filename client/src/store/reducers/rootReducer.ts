import { combineReducers } from "@reduxjs/toolkit";
import { moviesSlice } from "./moviesReducer";
import { authSlice } from "./authReducer";
import { trendingSlice } from "./trendingSlice";

export const rootReducer = combineReducers({
  movies: moviesSlice.reducer,
  auth: authSlice.reducer,
  trending: trendingSlice.reducer,
});
