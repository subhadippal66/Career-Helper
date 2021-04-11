import React from "react";
import { Link, Redirect } from "react-router-dom";
import LoginBtn from "./LoginBtn";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

function Login() {
  let user = localStorage.getItem("authToken") || null;

  return (
    <div
      className=""
      style={{
        backgroundColor: "rgb(0, 0, 0,0.6)",
        backgroundBlendMode: "overlay",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      <div
        className="text-center text-white w-full flex flex-col justify-around items-center"
        style={{
          height: "70vh",
        }}
      >
        <div className="flex flex-col justify-around items-center">
          <h1 className="text-5xl font-extrabold m-8">
            a place to find a roadmap
          </h1>
          <h2>
            A Place where you find a roadmap to complete your dream for Free
          </h2>
        </div>
        {user ? (
          <>
            <Link to="/">
              <div className="hover:bg-blue-400 duration-300 shadow-xl hover:shadow-none flex flex-row items-center justify-center bg-white text-black px-12 py-4 rounded-full font-bold text-xl">
                <div>Next</div>
                <div className=" animate-ping">
                  <NavigateNextIcon fontSize="large" />
                </div>
              </div>
            </Link>
            {/* <Redirect to={{ pathname: "/branch" }} /> */}
          </>
        ) : (
          <div className="duration-300 hover:bg-green-300 cursor-pointer select-none px-2	leading-none shadow-xl hover:shadow-none bg-white text-black  rounded-full font-bold text-xl">
            <LoginBtn imageSize={25} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
