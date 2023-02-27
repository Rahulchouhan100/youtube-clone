import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/sidebarSlice";
import { useLocation } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [showDescription, setShowDescription] = useState(false);
  const location = useLocation();
  const { state, desc } = location.state;
  console.log(desc);

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
