import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div className="">
      <div className=" mt-auto divide-y-2 divide-gray-400 flex flex-col w-full  bg-gray-700">
        <div className="text-white w-full flex flex-col md:flex-row justify-between items-start py-3 md:px-10 px-3">
          <div className="m-4 flex flex-col justify-start ">
            <h1 className="text-2xl font-bold text-white mb-4">About</h1>
            <div className="text-gray-300 text-base font-light">
              <p className=" w-52">
                You will find a roadmap about centain topic and get an idea
                about where to start that topic
              </p>
            </div>
          </div>
          <div className="m-4 flex flex-col justify-start ">
            <h1 className="text-2xl font-bold text-white mb-4">Social</h1>
            <div className="text-gray-300 text-base font-light space-y-1">
              <a
                href="https://www.instagram.com/subhadippal66/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-row space-x-3 hover:text-yellow-300 mb-2 duration-200 transform hover:scale-105">
                  <InstagramIcon />
                  <p>instagram</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/subhadip-pal-287a10184/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-row space-x-3 hover:text-yellow-300 mb-2 duration-200 transform hover:scale-105">
                  <LinkedInIcon />
                  <p>Linkedin</p>
                </div>
              </a>
            </div>
          </div>
          <div className="m-4 flex flex-col justify-start ">
            <h1 className="text-2xl font-bold text-white mb-4">Contact me</h1>
            <div className="text-gray-300 text-base font-light space-y-1">
              <a
                href="mailto:2018ugce003@nitjsr.ac.in"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-row space-x-3 hover:text-yellow-300 mb-2 duration-200 transform hover:scale-105">
                  <MailIcon />
                  <p>2018ugce003@nitjsr.ac.in</p>
                </div>
              </a>
              <a
                href="mailto:subhadippal66@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-row space-x-3 hover:text-yellow-300 mb-2 duration-200 transform hover:scale-105">
                  <MailIcon />
                  <p>subhadippal66@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="text-gray-300 w-full flex flex-col md:flex-row justify-between items-start py-3 md:px-10 px-3">
          <div className="m-4">
            Copyright © 2021 All Rights Reserved by TargetTree.
          </div>
          <a
            href="https://github.com/subhadippal66/Career-Helper"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex flex-row space-x-3 m-4 hover:text-yellow-300 transform hover:scale-110 duration-200">
              <GitHubIcon />
              <p>view source code</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
