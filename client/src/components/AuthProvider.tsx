import axios from "axios";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (formData: FormData) => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // You can have additional state variables like user data, tokens, etc.

  const login = async (formData: FormData) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        formData
      );
      console.log(response);
      if (response) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    // Perform logout logic, set isLoggedIn to false, clear JWT, etc.
  };

  // Other helper functions and state variables can be added as needed

  const authContextValue = {
    isLoggedIn,
    login,
    logout,
    // Make other state variables and functions available in the context
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
