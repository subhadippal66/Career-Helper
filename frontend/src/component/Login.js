import React from "react";
import { Link } from "react-router-dom";
import LoginBtn from "./LoginBtn";

function Login() {
  const user = localStorage.getItem("authToken") || null;

  return (
    <div
      className=""
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1443188631128-a1b6b1c5c207?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80) ",
        backgroundColor: "rgb(0, 0, 0,0.6)",
        backgroundBlendMode: "overlay",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      <div
        className="text-center text-white w-full flex flex-col justify-around items-center"
        style={{
          height: "80vh",
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
          <Link to="/">
            <div className="shadow-xl hover:shadow-none flex flex-row items-center bg-white text-black px-12 py-4 rounded-full font-bold text-xl">
              Dashboard
            </div>
          </Link>
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
