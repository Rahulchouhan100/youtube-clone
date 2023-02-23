import Hamburger from "../assests/hamburger.png";
import Logo from "../assests/unnamed.png";
import Notification from "../assests/bell.png";
import Search from "../assests/search.png";
import ProfileIcon from "../assests/profile.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/sidebarSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResult } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  // console.log(searchQuery);

  useEffect(() => {
    // make an api call after every key press
    // but if the difference b/w 2 Api call is less than <200ms - Decline the api call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        getSuggestion(searchCache[searchQuery]);
      } else {
        getSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    console.log("api call -- " + searchQuery);
    setSuggestion(json[1]);

    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between items-center px-10 py-3 shadow-sm sm:px-3 sticky top-0 bg-white">
      <section className="flex items-center basis-1/4 sm:basis-1/6">
        <img
          src={Hamburger}
          alt="Hamburger-icon"
          className="w-6 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        {/* <Link to="/"> */}
        <img src={Logo} alt="logo" className="w-24 ml-10 sm:hidden" />
        {/* </Link> */}
      </section>
      <section className="basis-1/2 relative flex items-center sm:basis-4/5">
        <input
          type="text"
          className="w-5/6  px-3 py-2 border-2 rounded-l-full outline-none sm:py-1"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <button className="border-1 bg-gray-200 w-20 h-11 rounded-r-full border-2 sm:w-10 sm:h-9">
          <img
            src={Search}
            alt="search-icon"
            className="w-8 border-3 pl-2 ml-4 sm:w-4 sm:pl-0 sm:ml-2"
          />
        </button>
        {showSuggestion && (
          <div className="absolute top-12 bg-white w-[31rem] px-3 rounded-b-lg shadow-md">
            <ul>
              {suggestion.map((showSuggestion, index) => (
                <li
                  key={index}
                  className="flex items-center gap-1 py-1 hover:bg-gray-200 px-2"
                >
                  <img src={Search} alt="search-icon" className="w-3 h-3" />
                  <span>{showSuggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
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
