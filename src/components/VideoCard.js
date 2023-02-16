import React, { useEffect, useState } from "react";
// import football from "../assests/football.png";

const VideoCard = ({ info }) => {
  const [thumbnail, setThumbnail] = useState([]);
  //   console.log("info:::", info?.snippet);
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  useEffect(() => {
    thumbnailsApi();
  }, []);
  const thumbnailsApi = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyDtjRNuZzkhYl3bfr2cQxkMtwmuzW550PQ"
    );
    const json = await data.json();
    // console.log(json.items[0].snippet.thumbnails.high);
    setThumbnail(json.items[0]?.snippet?.thumbnails);
  };

  return (
    <div>
      <div className="p-2 w-80 ">
        <img
          src={thumbnails?.medium?.url}
          alt="thumbnails"
          className="rounded-lg mb-2"
        />
        <div className="flex gap-2">
          <img
            src={thumbnail?.high?.url}
            alt="icon"
            className="w-8 h-8 border-2 rounded-full"
          />
          <div>
            <h1 className="">{title}</h1>
            <p className="text-gray-500 text-md">{channelTitle}</p>
            <span className="text-gray-500 font-normal">
              {Math.round(statistics?.viewCount / 10000)}k views
            </span>{" "}
            &middot; <span className="text-gray-500">4 hour ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;