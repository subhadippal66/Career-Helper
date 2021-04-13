import { CircularProgress } from "@material-ui/core";
import React from "react";

function Loading() {
  return (
    <div className="h-screen flex flex-row items-center justify-center">
      <div className=" fixed mx-10 p-4 z-50 shadow-2xl bg-purple-200 rounded-2xl flex flex-col space-y-2 justify-start items-center">
        <CircularProgress color="secondary" />
        <div className="font-extrabold text-2xl">loading</div>
        <div className="text-sm text-center p-4">
          Data is loading from our database, please wait ......
        </div>
      </div>
    </div>
  );
}

export default Loading;
