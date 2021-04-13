import React, { useEffect } from "react";
import About_rev from "./About/About_rev";
import subha from "../media/subhadip.jpg";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-20 ">
      <div className=" min-h-screen">
        <About_rev
          image_={subha}
          heading="Meet the developer 👨🏻‍💻"
          details="Hi, My name is Subhadip Pal. I am a MERN stack developer."
        />
        <div className=" font-black text-3xl p-4 text-center text-gray-800">
          Connect with me 🙋🏻‍♂️
        </div>
        <div className="flex sm:flex-row flex-col justify-around p-6 items-center space-y-4">
          <a
            href="https://github.com/subhadippal66/Career-Helper"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-700 duration-200 transform hover:scale-110 hover:shadow-xl"
          >
            <GitHubIcon style={{ fontSize: "100px" }} />
          </a>
          <a
            href="mailto:subhadippal66@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-700 duration-200 transform hover:scale-110 hover:shadow-xl"
          >
            <MailIcon style={{ fontSize: "100px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/subhadip-pal-287a10184/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-700 duration-200 transform hover:scale-110 hover:shadow-xl"
          >
            <LinkedInIcon style={{ fontSize: "100px" }} />
          </a>
          <a
            href="https://www.instagram.com/subhadippal66/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-700 duration-200 transform hover:scale-110 hover:shadow-xl"
          >
            <InstagramIcon style={{ fontSize: "100px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
