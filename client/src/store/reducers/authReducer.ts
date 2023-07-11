import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
  token: null,
};

export type AuthStateType = {
  user: null | string;
  loading: boolean;
  error: null | Error;
  token: null | string;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.loading = false;
      state.user = null;
      state.error = null;
    },
    token: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, token } =
  authSlice.actions;

export default authSlice.reducer;
