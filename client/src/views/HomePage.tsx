import { useEffect, useState } from "react";

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
  return <pre className="whitespace-pre-wrap">{JSON.stringify(data)}</pre>;
};
