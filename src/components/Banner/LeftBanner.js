import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Competitive Programmer.",
      "Full Stack Web Developer.",
      "Blockchain Developer.",
      "Electrical & Electronics Engineer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm
          <span className="text-designColor capitalize"> Yash Raj</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a B.Tech graduate in Electrical & Electronics
          Engineering from IIT Patna. I specialize as a full-stack developer
          with experience in backend and blockchain engineering. Proficient in
          multiple programming languages and tools, I have a strong track record
          in competitive programming and leadership roles.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              className="bannerIcon"
              href="https://www.facebook.com/profile.php?id=100008707562982"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              className="bannerIcon"
              href="https://www.linkedin.com/in/yashraj83/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="bannerIcon"
              href="https://github.com/Trickster-cell"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="bannerIcon"
              href="https://www.instagram.com/y.ash_r/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiCplusplus />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <IoLogoJavascript />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
