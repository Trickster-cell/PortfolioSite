import React from "react";
import Title from "../Layouts/Title";
import ProjectCard from "./ProjectCard";
import {
  IHMTC,
  projectOne,
  projectTwo,
  projectThree,
  spikingSegFormer,
  musicify,
  nft,
  WeatherAPP,
} from "../../assets/index";
import {
  FaBootstrap,
  FaEthereum,
  FaHardHat,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiOpencv,
  SiSolidity,
  SiTailwindcss,
} from "react-icons/si";
import Redis from "../../assets/Icons/Redis";
import RabbitMq from "../../assets/Icons/RabbitMq";
import PostgreSQL from "../../assets/Icons/PostgreSQL";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          // title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="Microservices architecture based Weather app"
          des="A microservices-based real-time weather app using Node.js, PostgreSQL, MongoDB, and Redis, fetching and caching weather data, checking alerts, and sending email notifications via RabbitMQ."
          src={WeatherAPP}
          icons={[FaReact, SiTailwindcss, FaPython, Redis, RabbitMq, PostgreSQL, SiMongodb]}
          githubLink={"https://drive.google.com/file/d/1oTfe7iGFYwgdPh1uqjqwdcA9ZbZnLy-l/view?usp=sharing"}
          siteLink={"https://weatherappfe.onrender.com/"}
        />
        <ProjectCard
          title="IHMTC 2023 Registration & Accommodation Portal"
          des="Developed International Heat & Mass Transfer Conference (IHMTC) 2023 registration & accommodation portal. The portal was fully operational for 2 months, facilitating registrations and accommodation management for over 800 attendees worldwide."
          src={IHMTC}
          icons={[FaReact, SiExpress, SiMongodb, FaNodeJs, SiTailwindcss]}
          githubLink={"https://github.com/erajatt/RegAndAccomodationPortal"}
          siteLink={"https://dulcet-granita-b283e5.netlify.app/"}
        />
        <ProjectCard
          title="Spiking SegFormer"
          des="Integrated a novel combination of Spiking Neural Networks (SNNs) with the SegFormer transformer-based architecture for semantic image segmentation. Implemented surrogate gradient methods for training and introduced a spiking multi-headed attention module to augment SegFormer's attention mechanism."
          src={spikingSegFormer}
          icons={[FaPython]}
          githubLink={"https://github.com/Trickster-cell/ImplementationV2"}
          siteLink={
            "https://drive.google.com/file/d/1DPVVLavWguMnOSi19kE7jhLFvXSlvpAI/view"
          }
        />
        <ProjectCard
          title="Musicify"
          des="Created a comprehensive music sharing platform utilizing the MERN stack, featuring robust user authentication mechanisms for secure access. Implemented advanced functionality allowing users to curate upto 15 personalized playlists by uploading audio files, with the option to share publicly for communal enjoyment."
          src={musicify}
          icons={[FaReact, SiExpress, SiMongodb, FaNodeJs, FaBootstrap]}
          githubLink={"https://github.com/Trickster-cell/Musicify"}
          siteLink={"https://musicifyf.onrender.com/"}
        />
        <ProjectCard
          title="NFT Marketplace"
          des="Devised a fully functional NFT marketplace, harnessing the capabilities of smart contracts and ReactJS. Created an intuitive platform that streamlines the process of transactions of NFTs on the Blockchain. Implemented the ERC-721 token standard and deployed the contract on the Polygon Mumbai Network."
          src={nft}
          icons={[SiSolidity, FaHardHat, FaReact, FaBootstrap, FaEthereum]}
          githubLink={"https://github.com/Trickster-cell/nft-marketplace2"}
        />
        <ProjectCard
          title="Cloudbook"
          des="Made a web app in which users can store their personal notes secured. The user can signup/login in the app to create/edit/delete notes. All the user data including the profile picture of user gets stored in the Mongo Database. Stores the password and other confidential stuff in hashed format to make it more secured."
          src={projectOne}
          icons={[FaReact, SiExpress, SiMongodb, FaNodeJs, FaBootstrap]}
          githubLink={"https://github.com/Trickster-cell/CloudBook"}
        />
        <ProjectCard
          title="Virtual Draw"
          des="Developed a desktop program that allows users to draw by waving colourful markers in front of the camera. With the NumPy library the program converts the input frames into operable Numerical Matrices. Using OpenCv application access the video camera and track the colored marker."
          src={projectTwo}
          icons={[FaPython, SiOpencv]}
          githubLink={"https://github.com/Trickster-cell/VirtualDraw"}
        />
      </div>
    </section>
  );
};

export default Projects;
