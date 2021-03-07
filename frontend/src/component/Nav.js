import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../Stateprovider";
import { useHistory } from "react-router-dom";
import { Popover } from "@material-ui/core";
import LoginBtn from "./LoginBtn";
import userLogo from "../media/user.png";

function Nav() {
  const [{ prefrence, user }, dispatch] = useStateValue();
  const userName = localStorage.getItem("userName") || "You are not Signed In";
  const image = localStorage.getItem("userImage") || null;
  const token = localStorage.getItem("authToken") || null;
  const history = useHistory();
  const handleAuth = () => {
    if (token) {
      localStorage.clear();
      auth.signOut();
      history.push("/login");
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className=" bg-gray-800 z-50 text-white w-full flex flex-row justify-between items-center p-3 font-bold text-xl fixed">
      <div>Target</div>
      <div>
        <Link to="/"> Home</Link>
      </div>
      <div>
        <div
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          <img
            src={token ? image : userLogo}
            className="rounded-full w-10 cursor-pointer bg-white"
            alt="userimage"
          />
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div className="p-4 flex flex-col">
            <div>{userName}</div>
            {token ? (
              <div
                onClick={handleAuth}
                className="cursor-pointer hover:bg-red-200 border-red-700 border duration-300 px-2 py-1 mt-1 text-center"
              >
                log-out
              </div>
            ) : (
              <div className="border-green-600 duration-300 hover:bg-green-300 text-black transition-all border cursor-pointer">
                <LoginBtn imageSize={18} />
              </div>
            )}
          </div>
        </Popover>
      </div>
    </div>
  );
}

export default Nav;
