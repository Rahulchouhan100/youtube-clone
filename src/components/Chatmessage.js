import React from "react";
import profileImg from "../assests/profile-user.png";

const Chatmessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-3 p-2 shadow-sm">
      <img src={profileImg} alt="" className="w-5 h-5 rounded-full" />
      <span className="text-black-700 font-semibold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default Chatmessage;
