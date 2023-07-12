import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: undefined,
};

export type AuthStateType = {
  currentPage: undefined | number;
};

export const navSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = navSlice.actions;

export default navSlice.reducer;
