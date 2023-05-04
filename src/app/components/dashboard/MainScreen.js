import React from "react";
import movie1 from "../../../../public/movie1.jpg";
import Image from "next/image";

function MainScreen() {
  return (
    <div className="bg-mainColor px-10 py-10">
      <div>
        <div className="flex gap-5 justify-end text-white">
          <input
            className="px-2 text-sm border-b-2 bg-transparent w-250 bg-mainColor border-b-gray outline-none opacity-50 focus:border-green"
            placeholder="Enter your search request.."
          />
          <p className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-green mt-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
          </p>
          <div className="w-12 h-12 rounded-3xl">
            <Image src={movie1} alt="profile" width={100} height={100}  className="w-12 h-12 rounded-3xl bg-IMDB border-green border-2"/>
          </div>
        </div>
      </div>

      <div className=" h-96 w-auto flex justify-center items-center">
        <Image
          src={movie1}
          width={150}
          height={150}
          alt="movies"
          className="h-96 w-auto m-5 p-5"
        />
      </div>
      <div>
        <div className="text-left py-3 text-white">Upcoming Movies</div>
        <div className="flex justify-center items-center text-left p-5 gap-3">
          <p className=" w-36 h-44 bg-white border-black rounded-lg">Home</p>
          <p className=" w-36 h-44 bg-white border-black rounded-lg">Home</p>
          <p className=" w-36 h-44 bg-white border-black rounded-lg">Home</p>
          <p className=" w-36 h-44 bg-white border-black rounded-lg">Home</p>
        </div>
      </div>
      <div>
        <div className="text-left py-3 text-white">latest Movies</div>
        <div className="flex justify-center items-center text-left p-5 gap-3">
          <p className=" w-36 h-44 bg-white border-black rounded-lg">Home</p>
          <p className=" w-36 h-44 bg-white border-black rounded-lg">Home</p>
          <p className=" w-36 h-44 bg-white border-black rounded-lg">Home</p>
          <p className=" w-36 h-44 bg-white border-black rounded-lg">Home</p>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
