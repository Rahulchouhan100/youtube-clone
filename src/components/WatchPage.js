import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/sidebarSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      <div>
        <iframe
          width="642"
          height="361"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="Jhoome Jo Pathaan Song | Shah Rukh Khan, Deepika | Vishal &amp; Sheykhar, Arijit Singh, Sukriti, Kumaar"
          allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchPage;
