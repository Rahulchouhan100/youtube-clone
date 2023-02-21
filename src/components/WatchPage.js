import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/sidebarSlice";
import { useLocation } from "react-router-dom";

const WatchPage = () => {
  const location = useLocation();
  const { title } = location.state;

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex gap-2">
      <div className="basis-4/6 border-2 p-2">
        <iframe
          width="570"
          height="300"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="Jhoome Jo Pathaan Song | Shah Rukh Khan, Deepika | Vishal &amp; Sheykhar, Arijit Singh, Sukriti, Kumaar"
          allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h4 className="text-2xl font-medium w-5/6 mt-2">{title}</h4>
      </div>

      {/* chat app---------------  */}
      <div className="basis-2/6">hello</div>
    </div>
  );
};

export default WatchPage;
