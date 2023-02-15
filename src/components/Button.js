import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-200 px-2 py-1 rounded-lg m-2">{name}</button>
    </div>
  );
};

export default Button;
