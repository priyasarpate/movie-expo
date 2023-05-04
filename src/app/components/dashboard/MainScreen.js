import React from "react";
import movie1 from "../../../../public/movie1.jpg"
import Image from "next/image";

function MainScreen() {
  return (
      <div className="bg-mainColor px-10">
        <div>
          <div className=" flex justify-end">
            <p className="text-start">Seqarchbar</p>
            <p className="">messge</p>
            <p>profile</p>
          </div>
        </div>

          <div className=" h-96 w-auto flex justify-center items-center">
          <Image src={movie1} width={150} height={150} alt="movies" 
          className="h-96 w-auto m-5 p-5"
          />
          </div>
        <div>
          <div className="text-left py-3 text-gray-400">GENERALS</div>
          <div className="text-left p-5">
            <p>Home</p>
            <p>Community</p>
            <p>Descovery</p>
            <p>Coming Soon</p>
          </div>
        </div>
      </div>
  );
}

export default MainScreen;
