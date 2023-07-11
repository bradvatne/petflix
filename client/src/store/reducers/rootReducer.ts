import { combineReducers } from "@reduxjs/toolkit";
import { moviesSlice } from "./moviesReducer";

export const rootReducer = combineReducers({
  movies: moviesSlice.reducer,
});
