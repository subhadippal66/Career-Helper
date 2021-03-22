import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import BookIcon from "@material-ui/icons/Book";

function ReadBox({ data }) {
  return (
    <div className="flex flex-col items-center text-center bg-white p-6 sm:mx-20 mx-4 rounded-2xl bg-opacity-80">
      <div className="font-bold text-2xl space-x-2 bg-yellow-400 px-4 py-2 rounded-2xl transform -translate-y-12 flex flex-row justify-center items-center">
        <h1>Reading Zone</h1>
        <BookIcon fontSize="large" />
      </div>
      <div className="transform -translate-y-6 space-y-4">
        {data?.map((val, i) => {
          return (
            <div className="bg-indigo-300 bg-opacity-80 p-4 rounded-tr-2xl rounded-bl-2xl shadow-md">
              <div className="font-bold ring-2 p-2">{val.heading}</div>
              <div className="text-left font-mono font-light my-4">
                {val.details}.
              </div>
              {/* <div className="text-left text-yellow-800 font-bold py-3">
                Read More here -
              </div> */}
              {val.links?.map((d, i) => {
                return (
                  <div className="flex sm:flex-row flex-col justify-between bg-yellow-200 m-2">
                    <div className="font-semibold p-2 font-mono">{d.name}</div>
                    <div className="">
                      <a
                        title="Open in new window"
                        href={d.url}
                        target="_blank"
                        className="flex flex-row justify-center p-2 bg-blue-400 hover:bg-blue-600 duration-300"
                      >
                        <h1 className="font-bold">Visit</h1>
                        <ArrowForwardIosIcon className=" animate-pulse" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReadBox;
