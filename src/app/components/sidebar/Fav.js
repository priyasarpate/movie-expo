"use client";

import React, { useState } from "react";

function Fav({ movies }) {
  const [showAll, setShowAll] = useState(false);

  // Check if movies is undefined or not an array
  if (!movies || !Array.isArray(movies)) {
    return null; // or return an appropriate component or message
  }

  const displayMovies = showAll ? movies : movies.slice(0, 3);

  const handleSeeAllClick = () => {
    setShowAll(true);
  };

  return (
    <div>
      <div>
        <h2 className={`mb-3 text-2xl font-semibold text-white`}>Fav Movies</h2>
        {displayMovies.map((movie) => {
          return (
            <div
              className="flex gap-3 border-white w-44 h-24 bg-black mt-10"
              key={movie.id}
            >
              <div className="text-start">
                <div className="w-29 h-24 bg-black">
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    alt={movie.path}
                    className="h-24 w-20 rounded-lg"
                  />
                </div>
              </div>

              <div className="">
                <p className="font-bold text-white text-left">{movie.title}</p>
                <div className="flex">
                  <p className="text-green font-normal text-sm">Action</p>
                  <p className="font-semibold text-sm text-green">,Horror</p>
                </div>
                <div className="flex mt-6 gap-2">
                  <p className="bg-IMDB text-xs text-center text-white p-1">
                    IMDB
                  </p>
                  <p className="text-normal text-green">7.8</p>
                </div>
              </div>
            </div>
          );
        })}

        {!showAll && movies.length > 3 && (
          <div className="py-6">
            <button
              className="text-white bg-green rounded-lg px-5 w-44 h-10"
              onClick={handleSeeAllClick}
            >
              See all
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Fav;
