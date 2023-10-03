"use client";
import Card from "@/components/Card";
import Link from "next/link";
import { useState, useEffect } from "react";

function FetchMovies({ location }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const title = location;
  let link =
  process.env.NEXT_PUBLIC_UPCOMING;

  if (title && title === "Top") {
    link = process.env.NEXT_PUBLIC_TOP;
  }

  if (title && title === "Popular") {
    link = process.env.NEXT_PUBLIC_POPULAR;
  }

  const fetchData = async () => {
    try {
      const response = await fetch(link, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: process.env.NEXT_PUBLIC_API_TOKEN,
        },
      });
      const { results } = await response.json();

      setMovies(results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p className=" bg-gray-500 h-screen w-full">Loading...</p>;
  }

  return (
    <div className="flex flex-col justify-center bg-gray-500">
      <div className="bg-gray-900 flex justify-center">
        <h3 className="text-white">{!title ? "Upcoming" : title} movies</h3>
      </div>

      <div className=" grid grid-cols-2 gap-3 my-2 pl-3 mx-2 md:grid-cols-8 md:gap-5 md:pl-4 md:px-2">
        {movies.map((item) => (
          <Link href={`/Movie/${item.id}`} key={item.id}>
            <Card item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FetchMovies;
