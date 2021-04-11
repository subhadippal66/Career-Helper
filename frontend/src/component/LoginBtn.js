import React, { useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useStateValue } from "../Stateprovider";
import { auth } from "../firebase";
import firebase from "firebase";
import googlePNG from "../media/google.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginBtn({ imageSize }) {
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
          console.log(auth);
          localStorage.setItem("userName", auth.user.displayName);
          localStorage.setItem("userEmail", auth.user.email);
          localStorage.setItem("authToken", auth.credential.idToken);
          localStorage.setItem("userImage", auth.user.photoURL);
          toast.success("Log-in success ✅", {
            toastId: 3,
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          });
          history.push("/login");
          handleClick();
          // return (
          //   <>
          //     <Redirect to={{pathname:'/branch'}} />
          //   </>
          // );
        }
      })
      .catch((e) => {
        alert(e.message);
        localStorage.clear();
        toast.error("Login Failed 🚫", {
          toastId: 4,
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    // return (
    //   <>
    //     <Redirect to={{ pathname: "/branch" }} />
    //   </>
    // );
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div
      onClick={googleSignIn}
      className="cursor-pointer p-4	select-none	leading-none flex flex-row items-center text-black"
    >
      <div className="mr-1">LOG-IN</div>
      <img
        alt=""
        src={googlePNG}
        className="select-none"
        style={{ height: `${imageSize}px` }}
      />
      <ToastContainer containerId={3} />
      <ToastContainer containerId={4} />
      {/* {open ? (<Redirect to={{pathname:'/branch'}}/>) : (<>)} */}
    </div>
  );
}

export default LoginBtn;
