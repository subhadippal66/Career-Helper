import React, { useEffect, useState } from "react";
import { useStateValue } from "../Stateprovider";
import "./customstyle/profile.css";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

function Profile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const image = localStorage.getItem("userImage");
  const [{ prefrence, user }, dispatch] = useStateValue();
  const token = localStorage.getItem("authToken") || null;
  const history = useHistory();

  const handleAuth = () => {
    if (token) {
      localStorage.clear();
      auth.signOut();
      history.push("/login");
    }
  };
  //console.log(user);
  return (
    <div>
      <div className="pt-20 w-full h-screen flex flex-row justify-center items-center ">
        <div className="flex md:flex-row flex-col md:w-96 md:h-72 w-72 h-96 bg-gray-300 ring rounded-2xl">
          <div
            className=" image__ md:w-1/2 md:h-auto  h-1/2 md:rounded-l-2xl md:rounded-r-none rounded-t-2xl "
            style={{
              background: `url('${image}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <div className=" md:w-1/2 text-center flex flex-col justify-center items-center">
            <div className="p-4 font-bold text-2xl tracking-widest">
              {localStorage.getItem("userName")}
            </div>
            <div className=" font-normal text-black text-sm">
              {localStorage.getItem("userEmail")}
            </div>
            <div
              onClick={handleAuth}
              className=" w-36 cursor-pointer hover:bg-red-200 border-red-700 border duration-300 px-2 py-1 mt-4 text-center"
            >
              log-out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
