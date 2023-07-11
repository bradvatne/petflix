import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginSuccess, loginStart, token } from "../reducers/authReducer";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData: FormData, { dispatch }) => {
    try {
      dispatch(loginStart());
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const jsonData = await response.json();
        dispatch(loginSuccess(jsonData.user));
        dispatch(token(jsonData.token));
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
