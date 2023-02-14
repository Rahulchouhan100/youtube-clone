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
      <div className="flex items-center gap-4 mb-2 border-bottom cursor-pointer hover:bg-slate-200 py-2 px-2 hover:rounded-full">
        <img src={HomeIcon} alt="home-icon" className="w-6" />
        <h4>{sidebarLink}</h4>
      </div>
    </>
  );
};
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.appslice.isMenuOpen);

  return !isMenuOpen ? null : (
    <>
      <div className="basis-1/5  shadow-lg px-9 py-3 gap-2 ease-in z-20 ">
        <SidebarList sidebarLink="Home" HomeIcon={HomeIcon} />
        <SidebarList sidebarLink="Subscription" HomeIcon={SubscriptionIcon} />
        <SidebarList sidebarLink="History" HomeIcon={HistoryIcon} />
        <SidebarList sidebarLink="library" HomeIcon={LibraryIcon} />
        <SidebarList sidebarLink="watch later" HomeIcon={WatchLaterIcon} />
        <SidebarList sidebarLink="Liked Videos" HomeIcon={LikeIcon} />
        <hr />
        <h2 className=" mt-2 mb-2 text-lg">Explore</h2>
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
