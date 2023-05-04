import React from "react";

function SideBar() {
  return (
    <div className="bg-black">
      <div className="group border-white text-center py-10 px-10">
        <h2 className={`mb-3 text-2xl font-semibold text-white`}>Movies</h2>

        <div>
          <div className="text-left py-3 text-gray">MENU</div>
          <div className="text-left p-5 text-white">
            <p>Home</p>
            <p>Community</p>
            <p>Descovery</p>
            <p>Coming Soon</p>
          </div>
        </div>

        <div>
          <div className="text-left py-3 text-gray">SOCIALS</div>
          <div className="text-left p-5 text-white">
            <p>Friends</p>
            <p>Parties</p>
            <p>Media</p>
          </div>
        </div>
        <div>
          <div className="text-left py-3 text-gray">GENERALS</div>
          <div className="text-left p-5 text-white">
            <p>Settings</p>
            <p>Log Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
