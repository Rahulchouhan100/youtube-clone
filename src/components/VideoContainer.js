import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  // const [page, setPage] = useState(1);

  const getYoutubeVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyC7tc-u86rubO5nQ9udHbP-Uqt3fFa3nAI`
    );
    const json = await data.json();
    // console.log(json.items);
    setVideos(json?.items);
  };

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  // const infiniteScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 1 >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     setPage((prev) => prev + 1);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", infiniteScroll);
  //   return () => window.removeEventListener("scroll", infiniteScroll);
  // });

  if (!videos) return;
  return videos?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap gap-2 ml-4">
      {videos.map((video) => (
        <Link
          to={"/watch?v=" + video?.id}
          state={{
            desc: video?.snippet?.description,
            state: video?.snippet?.title,
          }}
        >
          <VideoCard key={video?.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
