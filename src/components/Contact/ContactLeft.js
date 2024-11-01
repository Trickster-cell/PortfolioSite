import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Yash Raj</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I am a B.Tech graduate in Electrical & Electronics Engineering from
          IIT Patna. I specialize as a full-stack developer with experience in
          backend and blockchain engineering. Proficient in multiple programming
          languages and tools, I have a strong track record in competitive
          programming and leadership roles.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7903510948</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">yashrj2083@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
};

export default ContactLeft;
