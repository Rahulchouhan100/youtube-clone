import React from "react";
import HomeIcon from "../assests/home.png";
import HistoryIcon from "../assests/history.png";
import LikeIcon from "../assests/like.png";
import LibraryIcon from "../assests/library.png";
import WatchLaterIcon from "../assests/clock.png";
import SubscriptionIcon from "../assests/youtube.png";
import GameIcon from "../assests/gaming.png";
import NewsIcon from "../assests/news.png";
import LiveIcon from "../assests/live.png";
import TrendIcon from "../assests/trend.png";
import MoviesIcon from "../assests/movies.png";
import MusicIcon from "../assests/music.png";
import SportsIcon from "../assests/football.png";
import { useSelector } from "react-redux";
const SidebarList = ({ sidebarLink, HomeIcon }) => {
  return (
    <>
      <div className="flex items-center gap-4 mb-2 border-bottom cursor-pointer hover:bg-slate-200 py-2 px-2 hover:rounded-full lg:hover:bg-white">
        <img
          src={HomeIcon}
          alt="home-icon"
          className="w-6 lg:w-10 lg:ml-4 lg:mb-5 sm:w-7"
        />
        <h4 className="sm:hidden sm:gap-0 md:hidden md:gap-0 lg:hidden ">
          {sidebarLink}
        </h4>
      </div>
    </>
  );
};
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.appslice.isMenuOpen);

  return !isMenuOpen ? null : (
    <>
      <div className="basis-1/5  shadow-lg px-9 py-3 gap-2 ease-in z-20 h-[100vh] sticky left-0 top-16 sm:p-0 md:p-1 lg:p-3">
        <SidebarList sidebarLink="Home" HomeIcon={HomeIcon} />
        <SidebarList sidebarLink="Subscription" HomeIcon={SubscriptionIcon} />
        <SidebarList sidebarLink="History" HomeIcon={HistoryIcon} />
        <SidebarList sidebarLink="library" HomeIcon={LibraryIcon} />
        <SidebarList sidebarLink="watch later" HomeIcon={WatchLaterIcon} />
        <SidebarList sidebarLink="Liked Videos" HomeIcon={LikeIcon} />
        <hr />
        <h2 className=" mt-2 mb-2 text-lg sm:hidden">Explore</h2>
        <SidebarList sidebarLink="Trending" HomeIcon={TrendIcon} />
        <SidebarList sidebarLink="Gaming" HomeIcon={GameIcon} />
        <SidebarList sidebarLink="Music" HomeIcon={MusicIcon} />
        {/* <SidebarList sidebarLink="Live" HomeIcon={LiveIcon} /> */}
        {/* <SidebarList sidebarLink="News" HomeIcon={NewsIcon} /> */}
      </div>
    </>
  );
};

export default Sidebar;
