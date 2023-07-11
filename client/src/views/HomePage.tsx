import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { SearchBar } from "../components/SearchBar";
import { Trending } from "../components/Trending";
import { Recommended } from "../components/Recommended";

export const HomePage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch("/api/movies", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const jsonData = await res.json();

    setData(jsonData);
    console.log(jsonData);
    //setData(JSON.parse(res.body));
  };
  return (
    <div className="w-full h-full bg-semidarkblue flex">
      <NavBar />
      <div className="flex flex-col">
        <SearchBar />
        <Trending />
        <Recommended />
      </div>
    </div>
  );
};
