import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const getYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };
  if (!videos) return null;
  return (
    <div className="flex flex-wrap gap-5 m-3">
      {videos.map((video) => (
        <Link
          to={"/watch?v=" + video.id}
          state={{ title: video.snippet.title }}
          // channelTitle={{ channelTitle: video.snippet.channelTitle }}
          // likeCount={{ likeCount: video.statistics.likeCount }}
          // viewsCount={{ channelTitle: video.statistics.viewsCount }}
          // commentCount={{ channelTitle: video.statistics.commentCount }}
        >
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
