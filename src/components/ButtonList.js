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
      {btnListName.map((list) => (
        <Button name={list} />
      ))}
    </div>
  );
};

export default ButtonList;
