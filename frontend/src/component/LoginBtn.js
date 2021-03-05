import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../Stateprovider";
import { auth } from "../firebase";
import firebase from "firebase";
import googlePNG from "../media/google.png";

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
          history.push("/");
          handleClick();
        }
      })
      .catch((e) => {
        alert(e.message);
        localStorage.clear();
      });
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
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
        src={googlePNG}
        className="select-none"
        style={{ height: `${imageSize}px` }}
      />
    </div>
  );
}

export default LoginBtn;
