import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div className=" mt-auto divide-y-2 divide-gray-400 flex flex-col w-full  bg-gray-700">
      <div className="text-white w-full flex flex-col md:flex-row justify-between items-start py-3 md:px-10 px-3">
        <div className="m-4 flex flex-col justify-start ">
          <h1 className="text-2xl font-bold text-white mb-4">About</h1>
          <div className="text-gray-300 text-base font-light">
            <p className=" w-52">Description of the page</p>
          </div>
        </div>
        <div className="m-4 flex flex-col justify-start ">
          <h1 className="text-2xl font-bold text-white mb-4">Social</h1>
          <div className="text-gray-300 text-base font-light space-y-1">
            <div className="flex flex-row space-x-3">
              <InstagramIcon />
              <p>instagram</p>
            </div>
            <div className="flex flex-row space-x-3">
              <FacebookIcon />
              <p>facebook</p>
            </div>
          </div>
        </div>
        <div className="m-4 flex flex-col justify-start ">
          <h1 className="text-2xl font-bold text-white mb-4">Contact us</h1>
          <div className="text-gray-300 text-base font-light space-y-1">
            <div className="flex flex-row space-x-3">
              <MailIcon />
              <p>2018ugce003@nitjsr.ac.in</p>
            </div>
            <div className="flex flex-row space-x-3">
              <MailIcon />
              <p>subhadippal66@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-300 w-full flex flex-col md:flex-row justify-between items-start py-3 md:px-10 px-3">
        <div className="m-4">
          Copyright © 2021 All Rights Reserved by TargetTree.
        </div>
        <div className="flex flex-row space-x-3 m-4">
          <GitHubIcon />
          <p>view source code</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
