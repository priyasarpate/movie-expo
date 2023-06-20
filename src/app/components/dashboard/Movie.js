import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="flex gap-3 border-white w-44 h-24 bg-black mt-10">
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={movie.path}
        className="h-24 w-20 rounded-lg"
      />

      <p className="font-bold text-white text-left">{movie.title}</p>
    </div>





  );
};
export default Movie;



