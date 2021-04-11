import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../Stateprovider";
import { useHistory } from "react-router-dom";
import {
  Button,
  Divider,
  Drawer,
  List,
  makeStyles,
  Popover,
} from "@material-ui/core";
import LoginBtn from "./LoginBtn";
import userLogo from "../media/user.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clsx from "clsx";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import HomeIcon from "@material-ui/icons/Home";
import TuneIcon from "@material-ui/icons/Tune";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import icon from "../media/reading.svg";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

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
      toast.info("Logged-out", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
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

  //drawer
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="font-bold text-xl">
        <Link to="/">
          <div className="sm:hidden flex flex-row justify-start space-x-2 items-center p-4 hover:bg-gray-400 duration-200">
            <HomeIcon />
            <div>Home</div>
          </div>
        </Link>
        <Divider />
        <Link to="/branch">
          <div className="sm:hidden flex flex-row justify-start space-x-2 items-center p-4 hover:bg-gray-400 duration-200">
            <TuneIcon />
            <div>Preference</div>
          </div>
        </Link>
        <Divider />
        <Link to="/profile">
          <div className="sm:hidden flex flex-row justify-start space-x-2 items-center p-4 hover:bg-gray-400 duration-200">
            <AccountCircleIcon />
            <div>Profile</div>
          </div>
        </Link>
        <Divider />
      </List>
    </div>
  );

  return (
    <div className=" bg-gray-800 z-50 text-white w-full flex flex-row justify-between items-center py-1 pl-3 sm:pr-3 font-bold text-xl fixed">
      <div className="flex flex-row items-center">
        <div className=" bg-pink-200 p-1 rounded-full m-1">
          <img src={icon} className="w-8" alt="" />
        </div>
        <sup className="font-light text-gray-300">beta</sup>
      </div>
      <div className="flex flex-row items-center sm:gap-4">
        <Link to="/">
          <div className="sm:flex flex-row items-center space-x-1 hidden hover:bg-gray-700 duration-200 text-gray-300 hover:text-green-200 py-2 px-4 cursor-pointer">
            <HomeIcon />
            <div>Home</div>
          </div>
        </Link>
        <Link to="/branch">
          <div className="sm:flex flex-row items-center space-x-1 hidden hover:bg-gray-700 duration-200 text-gray-300 hover:text-green-200 py-2 px-4 cursor-pointer">
            <TuneIcon />
            <div>Preference</div>
          </div>
        </Link>
        <Link to="/profile">
          <div className="sm:flex flex-row items-center space-x-1 hidden hover:bg-gray-700 duration-200 text-gray-300 hover:text-green-200 py-2 px-4 cursor-pointer">
            <AccountCircleIcon />
            <div>Profile</div>
          </div>
        </Link>

        <div
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          <img
            src={token ? image : userLogo}
            className="rounded-full w-10 cursor-pointer bg-gray-400 hover:bg-green-200 duration-200 p-1"
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
              <>
                <div
                  onClick={handleAuth}
                  className="cursor-pointer hover:bg-red-200 border-red-700 border duration-300 px-2 py-1 mt-1 text-center"
                >
                  log-out
                </div>
              </>
            ) : (
              <div className="border-green-600 duration-300 hover:bg-green-300 text-black transition-all border cursor-pointer">
                <LoginBtn imageSize={18} />
              </div>
            )}
          </div>
        </Popover>
        <div className="sm:hidden flex">
          <React.Fragment key="right">
            <Button onClick={toggleDrawer("right", true)}>
              <div className="text-white">
                <MenuOutlinedIcon fontSize="medium" />
              </div>
            </Button>
            <Drawer
              anchor="right"
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
            >
              {list("right")}
            </Drawer>
          </React.Fragment>
        </div>
        {/* <div className="md:hidden">
          <DehazeIcon />
        </div> */}
        <ToastContainer />
      </div>
    </div>
  );
}

export default Nav;
