import React from "react";
import Popup from "reactjs-popup";
import YouTube from "react-youtube";
import CancelIcon from "@material-ui/icons/Cancel";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

function ShortVideo({ videos }) {
  console.log(videos);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="flex flex-col items-center text-center bg-white p-6 sm:mx-20 mx-4 rounded-2xl bg-opacity-80">
      <div className="font-bold text-2xl bg-yellow-400 px-4 py-2 rounded-2xl transform -translate-y-12">
        Topic introduction video
      </div>
      <div className="font-mono transform -translate-y-9 text-xl">
        These videos will give you a brief idea about topic in a short time
      </div>
      <div className="flex flex-col w-5/6 sm:w-4/6 space-y-4 ">
        {videos?.map((video, i) => {
          let videoId = video.url.substring(32);
          let thumbnailURL = `https://img.youtube.com/vi/${videoId}/0.jpg`;
          return (
            <div className="bg-yellow-200 flex sm:flex-row flex-col justify-between rounded-2xl">
              <span className="flex flex-row">
                <img
                  className=" w-28 sm:rounded-l-2xl sm:rounded-tl-none rounded-tl-2xl object-cover"
                  alt=""
                  src={thumbnailURL}
                />
                <h1 className="p-2 ml-2 font-mono">{video.name}</h1>
              </span>
              <div className="flex sm:flex-row flex-col">
                <span>
                  <Popup
                    trigger={
                      <div className=" cursor-pointer hover:bg-blue-600 duration-300 font-bold sm:rounded-r-2xl sm:rounded-br-none rounded-b-2xl  flex flex-row justify-center items-center bg-blue-400 px-4 py-6">
                        <h1>Watch Now</h1>
                        <PlayCircleFilledIcon fontSize="large" />
                      </div>
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="modal bg-blue-400 w-screen">
                        <div
                          className=" w-12 h-12 hover:bg-red-600 duration-300 cursor-pointer bg-red-400 text-black flex flex-col justify-center items-center p-2 rounded-full transform -translate-x-2 -translate-y-2 "
                          onClick={close}
                        >
                          <CancelIcon />
                        </div>
                        <div className=" text-center font-mono">
                          {video.name}
                        </div>
                        <div className="content sm:px-8 sm:py-4 p-2">
                          <YouTube videoId={videoId} opts={opts} />
                        </div>
                        <div className="flex flex-row justify-center items-center">
                          <div
                            className="flex p-2 hover:bg-red-600 duration-300 flex-row justify-center items-center cursor-pointer bg-red-400  font-bold"
                            onClick={() => {
                              close();
                            }}
                          >
                            <h1>close video</h1>
                            <CancelIcon />
                          </div>
                        </div>
                      </div>
                    )}
                  </Popup>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShortVideo;
