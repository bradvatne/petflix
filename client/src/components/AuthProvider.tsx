import axios from "axios";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (formData: FormData) => void;
  logout: () => void;
  register: (formData: FormData) => void;
}
const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  register: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //Need to store JWT in localstorage or cookie
  const register = async (formData: FormData) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/register",
        formData
      );
      console.log(response);
      if (response) {
        setIsLoggedIn(true);
        localStorage.setItem("token", response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (formData: FormData) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        formData
      );
      console.log(response);
      if (response) {
        setIsLoggedIn(true);
        localStorage.setItem("token", response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    // Perform logout logic, set isLoggedIn to false, clear JWT, etc.
    localStorage.removeItem("token");
  };

  // Other helper functions and state variables can be added as needed

  const authContextValue = {
    isLoggedIn,
    login,
    logout,
    register,
    // Make other state variables and functions available in the context
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
