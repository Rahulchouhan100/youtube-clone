import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/sidebarSlice";
import { useLocation } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const location = useLocation();
  const { state, desc } = location.state;
  console.log(desc);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex gap-2 justify-center mt-2">
      <div className="basis-2/4 border-2 p-2">
        <iframe
          width="570"
          height="300"
          src={"https://www.youtube.com/embed/" + searchParams?.get("v")}
          title="Jhoome Jo Pathaan Song | Shah Rukh Khan, Deepika | Vishal &amp; Sheykhar, Arijit Singh, Sukriti, Kumaar"
          allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h4 className="text-2xl font-medium w-4/5 mt-2">{state}</h4>
        <h3> {desc}</h3>

        {/* <h3></h3> */}
        <CommentsContainer />
      </div>

      {/* chat app---------------  */}
      <div className="basis-2/5 mr-4">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
