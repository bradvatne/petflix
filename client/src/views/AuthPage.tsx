"use client";
import React, { useState } from "react";
import { RegisterCard } from "../components/RegisterCard";
import { LoginCard } from "../components/LoginCard";
import { Icons } from "../components/ui/Icons";
import { useAuthContext } from "../components/AuthProvider";
import { LogoutCard } from "../components/LogoutCard";
import { Navigate } from "react-router-dom";

export const AuthPage = () => {
  const [loginMode, setLoginMode] = useState(true);
  const { isLoggedIn } = useAuthContext();

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div className="bg-darkblue h-full flex justify-around items-center flex-col">
      <Icons.MovieLogo />
      {loginMode ? <LoginCard /> : <RegisterCard />}
      <div></div>
    </div>
  );
};
