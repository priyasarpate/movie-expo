import React from "react";

function MainScreen() {
  return (
    <div>
      <div className="group border-white text-center">
        <h2 className={`mb-3 text-2xl font-semibold`}>Movie</h2>

        <div>
          <div className="text-left py-3 text-gray-400">MENU</div>
          <div className=" flex gap-5 p-5">
            <p className="text-start">Seqarchbar</p>
            <p className="">messge</p>
            <p>profile</p>
          </div>
        </div>

        <div>
          <div className="text-left py-3 text-gray-400">SOCIALS</div>
          <div className="text-left p-5">
            <p>poster</p>
          </div>
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
    </div>
  );
}

export default MainScreen;
