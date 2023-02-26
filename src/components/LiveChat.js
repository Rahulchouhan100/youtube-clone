import React from "react";
import Chatmessage from "./Chatmessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmsg } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      //api polling
      console.log("api polling");
      dispatch(
        addmsg({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full border-2  h-[25rem] p-2 mr-5 bg-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((c) => (
        <Chatmessage name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
