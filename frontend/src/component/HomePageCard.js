import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export default function OutlinedCard({
  heading = "loading...",
  details = "loading... please wait...",
  links = [],
}) {
  return (
    <div className="my-4 flex flex-col items-center" style={{ width: "95vw" }}>
      <div
        className=" lowercase font-extrabold text-2xl rounded-2xl transform translate-y-4 py-2 px-12 text-center min-w-max z-10"
        style={{
          backdropFilter: "blur(10px)",
          background:
            "linear-gradient(90deg, rgba(255,235,0,0.3) 0%, rgba(253,187,45,0.3) 100%)",
        }}
      >
        <h1>{heading}</h1>
      </div>
      <div
        className="flex flex-row justify-between rounded-2xl w-5/6 bg-white bg-opacity-80"
        // style={{
        //   background:
        //     "linear-gradient(90deg, rgba(34,193,195,0.5) 0%, rgba(253,187,45,0.5) 100%)",
        //   backdropFilter: "blur(20px)",
        // }}
      >
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

        <div
          className="py-6 flex flex-col justify-center items-center  rounded-r-2xl  cursor-pointer bg-opacity-60 bg-yellow-600"
          // style={{
          //   backdropFilter: "blur(20px)",
          //   background:
          //     " linear-gradient(90deg, rgba(252,211,0,0.5) 0%, rgba(75,84,0,0.5) 100%)",
          // }}
        >
          <NavigateNextIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}
