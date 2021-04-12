import React from "react";

function About_rev({ image_, heading, details }) {
  return (
    <div>
      <div className="flex w-full space-x-4 border-b-2 bg-red-50 border-gray-600 sm:flex-row-reverse sm:space-y-0 space-y-6 flex-col p-6 justify-around items-center text-center">
        <img
          src={image_}
          alt=""
          className=" sm:w-72 w-48 bg-gray-700 rounded-full"
        />
        <div className="flex flex-col items-center space-y-4 max-w-lg">
          <div className=" max-w-xs font-bold text-xl">{heading}</div>
          <div className="">{details} </div>
        </div>
      </div>
    </div>
  );
}

export default About_rev;
