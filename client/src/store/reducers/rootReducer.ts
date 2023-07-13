import { combineReducers } from "@reduxjs/toolkit";
import { moviesSlice } from "./moviesReducer";
import { authSlice } from "./authReducer";
import { trendingSlice } from "./trendingSlice";
import { navSlice } from "./navSlice";
import { searchSlice } from "./searchReducer";

export const rootReducer = combineReducers({
  movies: moviesSlice.reducer,
  auth: authSlice.reducer,
  trending: trendingSlice.reducer,
  nav: navSlice.reducer,
  search: searchSlice.reducer
});
