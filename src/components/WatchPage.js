import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/sidebarSlice";
import { useLocation } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import LikeIcon from "../assests/subscribe.png";
import ShareIcon from "../assests/share.png";

const WatchPage = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const location = useLocation();
  const { state, desc, channelTitle, likeCount, icon } = location.state;
  // console.log(channelTitle + "chhh" + likeCount + icon);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex gap-2 justify-center px-5">
      <div className="basis-3/5  p-2">
        <iframe
          className="w-full rounded-lg"
          height="350"
          src={"https://www.youtube.com/embed/" + searchParams?.get("v")}
          title="Jhoome Jo Pathaan Song | Shah Rukh Khan, Deepika | Vishal &amp; Sheykhar, Arijit Singh, Sukriti, Kumaar"
          allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h4 className="text-2xl font-medium w-full mt-2">{state}</h4>

        <section>
          <div className="flex mt-2 py-1 items-center">
            <section className="flex  gap-2 items-center basis-3/5">
              <img src={icon} alt="" className="w-9 h-9 rounded-full" />
              <div>
                <h3 className="font-semibold text-lg">{channelTitle}</h3>
                <p className="leading-4 text-gray-500">280k subscriber</p>
              </div>
              {subscribe ? (
                <button
                  className="bg-gray-100 text-black ml-16 px-3 py-[.40rem] rounded-full font-semibold cursor-pointer border"
                  onClick={() => setSubscribe(false)}
                >
                  Subscribed
                </button>
              ) : (
                <button
                  className="bg-black text-white ml-16 px-3 py-[.40rem] rounded-full font-semibold cursor-pointer"
                  onClick={() => setSubscribe(true)}
                >
                  Subscribe
                </button>
              )}
            </section>
            <section className="flex">
              <button className="flex items-center justify-between bg-gray-100 px-5 py-[.60rem] rounded-full">
                <img src={LikeIcon} alt="" className="w-5 mr-1" />
                <span className="font-semibold">
                  {Math.round(likeCount / 10000)}k
                </span>
                <img src={LikeIcon} alt="" className="w-5 rotate-180 ml-5" />
              </button>
              <button className="bg-gray-100 px-3 py-[.45rem]  flex items-center justify-between rounded-full ml-4">
                <img src={ShareIcon} alt="share-icon" className="w-5 mr-2" />
                <span className="font-semibold">Share</span>
              </button>
            </section>
          </div>
        </section>
        <div className="bg-gray-200 rounded-lg p-2 gap-2 mt-4 w-[40rem]">
          <span>Click here to show Description</span> &nbsp;
          {showDescription ? (
            <button
              onClick={() => setShowDescription(false)}
              className="cursor-pointer"
            >
              Show less..
            </button>
          ) : (
            <button
              onClick={() => setShowDescription(true)}
              className="cursor-pointer"
            >
              Show More...
            </button>
          )}
          {showDescription && <h4>{desc}</h4>}
        </div>

        {/* <h3></h3> */}
        <CommentsContainer />
      </div>

      {/* chat app---------------  */}
      <div className="basis-2/5 mr-4 mt-2">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
