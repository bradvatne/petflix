import React from "react";
import { Icons } from "./ui/Icons";

export const NavBar = () => {
  const links = [{}];

  return (
    <div className="m-8 w-24 bg-semidarkblue rounded-[1.25rem] flex flex-col items-center py-8">
      <Icons.MovieLogo />
      {links.map((link) => (
        <NavItem navItem={link} />
      ))}
    </div>
  );
};

type NavItemType = {};

const NavItem = ({ navItem }: { navItem: NavItemType }) => {
  return <></>;
};
