"use client";
import React, { useState, useEffect } from "react";
import Popular from "../movies/Popular";

const API = () => {
  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=22cdba295b10a4f09efa42a3e8d46c62&language=en-US&page=1";

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    setPopular(movies.results);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const renderedItems = showAll ? popular : popular.slice(0, 3);

  return (
    <div className="bg-black">
      <h2 className={` text-2xl font-semibold text-white pt-4 mb-0 text-center`}>
        Popular Movies
      </h2>

      <div className="popular-movies">
        {renderedItems.map((movie) => {
          return <Popular key={movie.id} movie={movie} />;
        })}
      </div>
      <div className="py-6">
        {!showAll && (
          <button onClick={toggleShowAll} className="text-white bg-green rounded-lg px-5 w-44 h-10 mt-5 ml-8">
            See all
          </button>
        )}
      </div>
    </div>
  );
};
export default API;
