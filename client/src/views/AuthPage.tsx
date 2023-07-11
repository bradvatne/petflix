"use client";
import React, { useState } from "react";
import { RegisterCard } from "../components/RegisterCard";
import { LoginCard } from "../components/LoginCard";
import { Icons } from "../components/ui/Icons";
import { useAuthContext } from "../components/AuthProvider";
import { LogoutCard } from "../components/LogoutCard";

export const AuthPage = () => {
  const [loginMode, setLoginMode] = useState(true);
  const { isLoggedIn } = useAuthContext();
  return (
    <div className="bg-darkblue w-full h-full flex justify-around items-center flex-col">
      <Icons.MovieLogo />
      {isLoggedIn ? (
        <LogoutCard />
      ) : loginMode ? (
        <LoginCard />
      ) : (
        <RegisterCard />
      )}
      <div></div>
    </div>
  );
};
