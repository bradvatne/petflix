import React from "react";
import { Register } from "../components/RegisterCard";
import { LoginCard } from "../components/LoginCard";
import { Icons } from "../components/ui/Icons";

export const AuthPage = () => {
  return (
    <div className="bg-darkblue w-full h-full flex justify-around items-center flex-col">
      <Icons.MovieLogo />
      <LoginCard />
      <div></div>
    </div>
  );
};
