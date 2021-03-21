import React from "react";

function TitleCard({ heading, image, details }) {
  return (
    <div className="flex flex-row  bg-white p-6 sm:mx-20 mx-4 rounded-2xl bg-opacity-80">
      <img
        src={image}
        className=" sm:w-40 sm:h-40 sm:ml-10 w-20 h-20  object-cover rounded-full"
        alt="courseIMAGE"
      />
      <div className="flex flex-col sm:ml-20 ml-4">
        <div className="text-2xl font-bold sm:text-5xl mb-4">{heading}</div>
        <div className="font-mono sm:pt-4">{details}</div>
      </div>
    </div>
  );
}

export default TitleCard;
