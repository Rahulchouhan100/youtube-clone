import React from "react";
import Button from "./Button";

const btnListName = [
  "All",
  "Music",
  "Live",
  "Chillstep",
  "Tailwind",
  "Javascript",
  "gaming",
  "Music",
  "Live",
  "Chillstep",
  "Tailwind",
  "Javascript",
  "gaming",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {btnListName.map((list, index) => (
        <Button name={list} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
