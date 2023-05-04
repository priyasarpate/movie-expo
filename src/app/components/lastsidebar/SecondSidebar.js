import React from "react";
import movie3 from "../../../../public/movie3.jpg";
import Image from "next/image";

function SecondSidebar() {
  return (
    <div className="bg-black">
      <div className="group border-white text-center py-10 px-10">
        <h2 className={`mb-3 text-2xl font-semibold text-white`}>
          Popular Movies
        </h2>

        <div className="flex gap-3 border-white w-44 h-24 bg-black mt-10">

          <div className="text-start">
            <div className="w-29 h-24 bg-black">
              <Image
                src={movie3}
                alt="fav"
                width={100}
                heigh={100}
                className="h-24 w-20 rounded-lg"
              />
            </div>
          </div>

          <div className="">
            <p className="font-bold text-white text-left">Luca</p>
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
        <div className="py-6">
            <button className="text-white bg-green rounded-lg px-5 w-44 h-10">See all</button>
          </div>
      </div>
    </div>
  );
}

export default SecondSidebar;
