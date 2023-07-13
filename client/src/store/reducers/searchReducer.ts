import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "";

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setSearch: (state, action) => {
      return action.payload;
    },
    // Other movie-related reducers if needed
  },
});

export const { setSearch } = searchSlice.actions;
