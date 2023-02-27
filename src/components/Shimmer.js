import React from "react";

const Shimmer = () => {
  return (
    <>
      <div></div>
      <div className="flex flex-wrap gap-5 ml-4">
        {Array(15)
          .fill("")
          .map((e, index) => (
            <div key={index}>
              <div className="bg-gray-200 h-40 w-56 mt-2 rounded-md"></div>
              <div className="bg-gray-200 h-6 w-52 mt-1"></div>
              <div className="bg-gray-200 h-5 w-40 mt-1"></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
