import Hamburger from "../assests/hamburger.png";
import Logo from "../assests/unnamed.png";
import Notification from "../assests/bell.png";
import Search from "../assests/search.png";
import ProfileIcon from "../assests/profile.png";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-10 py-3">
      <section className="flex items-center basis-1/4 ">
        <img
          src={Hamburger}
          alt="Hamburger-icon"
          className="w-6 cursor-pointer"
        />
        <img src={Logo} alt="logo" className="w-24 ml-10" />
      </section>
      <section className="basis-1/2 flex items-center">
        <input
          type="text"
          className="w-5/6  px-3 py-2 border-2 rounded-l-full outline-none"
          placeholder="Search..."
        />
        <button className="border-1 bg-gray-200 w-20 h-11 rounded-r-full border-2">
          <img
            src={Search}
            alt="search-icon"
            className="w-8 border-3 pl-2 ml-4"
          />
        </button>
      </section>
      <section className="flex basis-1/5 items-center justify-end">
        <img src={Notification} alt="notification-icon" className="w-7" />
        <div>
          <img
            src={ProfileIcon}
            alt="profile-icon"
            className="w-9 rounded-full ml-8"
          />
        </div>
      </section>
    </div>
  );
};

export default Header;
