import React from "react";

function Latest({ movies }) {
  console.log("Hello from upcoming movies", movies);
   // Check if movies is undefined or not an array
   if (!movies || !Array.isArray(movies)) {
    return null; // or return an appropriate component or message
  }

  return (
    <div className="bg-mainColor px-10 py-10">
      <div className="text-left py-3 text-white">latest Movies</div>
      <div className="flex justify-center items-center text-left p-5 gap-3">
        {movies.map((movie) => {
          return (
            <>
              <img
                key={movie.id}
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt={movie.path}
                className=" w-36 h-44 bg-white border-black rounded-lg"
              />
            </>
          );
        })}
        {/* <p className=" w-36 h-44 bg-white border-black rounded-lg">Home</p> */}
      </div>
    </div>
  );
}

export default Latest;
