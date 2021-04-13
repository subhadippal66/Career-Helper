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
        backgroundImage:
          'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80")',
        backgroundColor: "rgba(0,0,0,.6)",
        backgroundBlendMode: "overlay",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="text-center text-white w-full flex flex-col justify-around items-center"
        style={{
          height: "70vh",
        }}
      >
        <div className="flex flex-col justify-around items-center">
          <h1 className="sm:text-5xl text-3xl font-extrabold my-4 sm:my-8 p-2">
            platform that provide you a learning path
          </h1>
          <h2>
            "Success Ke Peeche Mat Bhaago, Excellence Ka Peecha Karo, Success
            Jhak Maarke Tumhare Peeche Ayegi"
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
