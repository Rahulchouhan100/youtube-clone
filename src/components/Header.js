import Hamburger from "../assests/hamburger.png";
import Logo from "../assests/unnamed.png";
import Notification from "../assests/bell.png";
import Search from "../assests/search.png";
import ProfileIcon from "../assests/profile.png";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/sidebarSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between items-center px-10 py-3 shadow-sm sm:px-3">
      <section className="flex items-center basis-1/4 sm:basis-1/6">
        <img
          src={Hamburger}
          alt="Hamburger-icon"
          className="w-6 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <img src={Logo} alt="logo" className="w-24 ml-10 sm:hidden" />
      </section>
      <section className="basis-1/2 flex items-center sm:basis-4/5">
        <input
          type="text"
          className="w-5/6  px-3 py-2 border-2 rounded-l-full outline-none sm:py-1"
          placeholder="Search..."
        />
        <button className="border-1 bg-gray-200 w-20 h-11 rounded-r-full border-2 sm:w-10 sm:h-9">
          <img
            src={Search}
            alt="search-icon"
            className="w-8 border-3 pl-2 ml-4 sm:w-4 sm:pl-0 sm:ml-2"
          />
        </button>
      </section>
      <section className="flex basis-1/5 items-center justify-end">
        <img
          src={Notification}
          alt="notification-icon"
          className="w-7 sm:hidden"
        />
        <div>
          <img
            src={ProfileIcon}
            alt="profile-icon"
            className="w-9 rounded-full ml-8 sm:ml-2 sm:w-8"
          />
        </div>
      </section>
    </div>
  );
};

export default Header;
