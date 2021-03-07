import React from "react";

export default function OutlinedCard() {
  return (
    <div className="my-4 flex flex-col items-center" style={{ width: "95vw" }}>
      <div className=" transform translate-y-4 py-2 px-12 text-center font-bold text-xl min-w-max z-10 bg-red-300">
        <h1>Heading</h1>
      </div>
      <div className=" w-5/6 p-6 bg-white shadow-xl hover:shadow-none">
        <h1>Details</h1>
        <h1>gdf</h1>
      </div>
    </div>
  );
}
