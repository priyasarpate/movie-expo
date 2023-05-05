import React from "react";

const Popular = ({ movie }) => { 

  return (
    <div className="bg-black">
      <div className="group border-white text-center py-3 px-10">
        <div className="flex gap-3 border-white w-44 h-24 bg-black mt-10">
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
            <p className="font-bold text-white text-left">
            {movie.title}
            </p>
            <div className="flex">
              <p className=" text-green font-normal text-sm">Action</p>
              <p className="font-semibold text-sm text-green">,Horror</p>
            </div>
            <div className="flex mt-6 gap-2">
              <p className="bg-IMDB text-xs text-center text-white p-1">IMDB</p>
              <p className="text-normal text-green">7.8</p>
            </div>
          </div>
        </div>
        {/* <div className="py-6">
          <button className="text-white bg-green rounded-lg px-5 w-44 h-10">
            See all
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Popular;
