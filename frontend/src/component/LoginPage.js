import React from "react";
import Login from "./Login";
import "react-toastify/dist/ReactToastify.css";
import About1 from "./About/About1";
import AboutLogo1 from "../media/about1.svg";
import About_rev from "./About/About_rev";
import subha from "../media/subhadip.jpg";
import Footer from "./Footer";

function LoginPage() {
  return (
    <div>
      <Login />
      <About1
        image_={AboutLogo1}
        heading="You’re here. Woo-hoo! We’re excited to tell you why this is the place to be."
        details="You will find a roadmap about centain topic and get an idea about where to start that topic"
      />
      <About_rev
        image_={subha}
        heading="Meet the developer 👨🏻‍💻"
        details="Hi, My name is Subhadip Pal. I am a MERN stack developer."
      />
      <Footer />
    </div>
  );
}

export default LoginPage;
