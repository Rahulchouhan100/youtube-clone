import React, { useState } from "react";
import Chatmessage from "./Chatmessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmsg } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");

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
    }, 5000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full border-2  h-[25rem] p-2 mr-5 bg-gray-100 rounded-t-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c) => (
          <Chatmessage name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="border  w-full p-2 flex items-center gap-4 rounded-b-lg bg-gray-100"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit", liveMessage);
          dispatch(
            addmsg({
              name: "Rahul Chouhan",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-10/12 border border-black px-2 py-1 rounded-full"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="bg-green-700 text-white border py-1 px-4 rounded-lg">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
