import React from "react";
import ButtonList from "./ButtonList";
import Shimmer from "./Shimmer";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-full">
      <ButtonList />
      <VideoContainer />
      {/* <Shimmer /> */}
    </div>
  );
};

export default MainContainer;
