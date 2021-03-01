import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../Stateprovider";

function Nav() {
  const [{ prefrence, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="bg-blue-600 opacity-40 text-white w-full flex flex-row justify-between p-4 font-bold text-xl fixed">
      <div>Target</div>
      <div>
        <Link to="/dashboard"> DashBoard</Link>
      </div>
      <div>{user ? user.displayName : "Login"}</div>
      <div onClick={handleAuth}>{user ? "logout" : ""}</div>
    </div>
  );
}

export default Nav;
