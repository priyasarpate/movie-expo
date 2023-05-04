"use client"; 
import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const API = () => {
  const [popular, setPopular] = useState([]);

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

  return (
    <div className="App">
    <h1>Movies</h1>
    <div className="popular-movies">
      {popular.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </div>
  </div>
  );
};
export default API;