import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export default function OutlinedCard({
  heading = "loading...",
  details = "loading... please wait...",
  links = [],
}) {
  return (
    <div className="my-4 flex flex-col items-center" style={{ width: "95vw" }}>
      <div className=" font-extrabold text-2xl rounded-2xl transform translate-y-4 py-2 px-12 text-center min-w-max z-10 bg-yellow-400">
        <h1>{heading}</h1>
      </div>
      <div className="flex flex-row justify-between rounded-2xl w-5/6 bg-white">
        <div className="flex flex-col justify-start items-start ml-5 mt-6">
          <div className="font-mono font-bold text-xl mb-5">{details}</div>
          <div className="inline-block mb-4">
            {links.map((value, index) => {
              return (
                <div
                  className="m-2 font-semibold text-black inline-block bg-yellow-300 hover:bg-yellow-600 duration-300 py-2 px-6 rounded-md cursor-pointer"
                  key={index}
                >
                  {value}
                </div>
              );
            })}
          </div>
        </div>

        <div className="py-6 flex flex-col justify-center items-center bg-yellow-400 rounded-r-2xl  cursor-pointer">
          <NavigateNextIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}
