"use client";
import React, { useState } from "react";
import { RegisterCard } from "../components/RegisterCard";
import { LoginCard } from "../components/LoginCard";
import { Icons } from "../components/ui/Icons";

export const AuthPage = () => {
  const [loginMode, setLoginMode] = useState(true);
  return (
    <div className="bg-darkblue w-full h-full flex justify-around items-center flex-col">
      <Icons.MovieLogo />
      {loginMode ? <LoginCard /> : <RegisterCard />}
      <div></div>
    </div>
  );
};
