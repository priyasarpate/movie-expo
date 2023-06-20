import React from "react";

function Upcoming({ movies }) {
  console.log("Hello from upcoming movies", movies);

  // Check if movies is undefined or not an array
  if (!movies || !Array.isArray(movies)) {
    return null; // or return an appropriate component or message
  }

  const moviesToDisplay = movies.slice(0, 5); // Get the first 5 movies

  return (
    <div className="bg-mainColor px-10 py-10">
      <div className="text-left py-3 text-white">Upcoming Movies</div>
      <div className="flex justify-start items-center overflow-x-scroll p-5 gap-3">
        {moviesToDisplay.map((movie) => (
          <img
            key={movie.id}
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt={movie.path}
            className="w-36 h-44 bg-white border-black rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}

export default Upcoming;
