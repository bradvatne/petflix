import { combineReducers } from "@reduxjs/toolkit";
import { moviesSlice } from "./moviesReducer";
import { authSlice } from "./authReducer";

export const rootReducer = combineReducers({
  movies: moviesSlice.reducer,
  auth: authSlice.reducer,
});
