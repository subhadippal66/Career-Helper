import React, { useEffect, useState } from "react";
import googlePNG from "../media/google.png";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../Stateprovider";
import { auth } from "../firebase";
import firebase from "firebase";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //   console.log(authUser);
      if (authUser) {
        //you are already logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  const googleSignIn = (e) => {
    e.preventDefault();
    const g_provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(g_provider)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div
      className="text-center text-white w-full flex flex-col bg-blue-600 justify-around items-center"
      style={{ height: "80vh" }}
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
        <Link to="/dashboard">
          <div className="shadow-2xl hover:shadow-none flex flex-row items-center bg-white text-black px-12 py-4 rounded-full font-bold text-xl">
            Dashboard
          </div>
        </Link>
      ) : (
        <div
          onClick={googleSignIn}
          className="cursor-pointer	select-none	 leading-none shadow-2xl hover:shadow-none flex flex-row items-center bg-white text-black px-12 py-4 rounded-full font-bold text-xl"
        >
          <div className="mr-1">LOG-IN</div>
          <img
            src={googlePNG}
            className="select-none"
            style={{ height: "25px" }}
          />
        </div>
      )}
    </div>
  );
}

export default Login;
