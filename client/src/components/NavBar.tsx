import React, { FC, ReactNode } from "react";
import { Icons } from "./ui/Icons";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/reducers/navSlice";

export const NavBar = () => {
  const links: NavItemType[] = [
    {
      id: 0,
      title: "Trending",
      icon: <Icons.Trending />,
    },
    {
      id: 1,
      title: "Movies",
      icon: <Icons.Movies />,
    },
    {
      id: 2,
      title: "TV Shows",
      icon: <Icons.TV />,
    },
    {
      id: 3,
      title: "Bookmarks",
      icon: <Icons.BookMark />,
    },
  ];

  return (
    <div className="m-8 w-24 max-h-[60rem] bg-semidarkblue rounded-[1.25rem] flex flex-col items-center justify-between py-8 shrink-0">
      <div>
        <Icons.MovieLogo />
        <div className="flex flex-col gap-[40px] mt-[4.5rem] items-center">
          {links.map((link) => (
            <NavItem navItem={link} key={link.title} />
          ))}
        </div>
      </div>
      <div className="flex">
        <Avatar />
      </div>
    </div>
  );
};

type NavItemType = {
  id: number;
  title: string;
  icon: ReactNode;
};

const NavItem = ({ navItem }: { navItem: NavItemType }) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(setCurrentPage(navItem.id))}>
      {navItem.icon}
    </button>
  );
};

const Avatar = () => {
  return (
    <div>
      <img
        src="/temp_portrait.png"
        className="border border-white rounded-full"
      />
    </div>
  );
};
