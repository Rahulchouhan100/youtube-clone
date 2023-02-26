import React from "react";
import Button from "./Button";

const btnListName = ["All", "Music", "Live", "Chillstep"];

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
