import React from "react";
import {
  cpp,
  c,
  python,
  html,
  css,
  js,
  typescript,
  solidity,
  golang,
  reactjs,
  nextjs,
  nodejs,
  pytorch,
  bootstrap,
  tailwind,
  express,
  mongo,
  django,
  hardhat,
  metamask,
  numpy,
  snntorch,
  postman,
  fastapi,
} from "../../assets";
import Title from "../Layouts/Title";

const styles = `
  .skills-section {
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
    text-align: center;
  }
  .skills-section h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  .skill-icon {
    height: 10vh;
    max-height: 60px; /* Ensure the icons don't get too large */
    margin: 5px;
  }
`;

const skillsData = [
  { src: cpp, alt: "C++" },
  { src: c, alt: "C" },
  { src: python, alt: "Python" },
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: js, alt: "JavaScript" },
  { src: typescript, alt: "TypeScript" },
  { src: solidity, alt: "Solidity" },
  { src: golang, alt: "Golang" },
  { src: nodejs, alt: "Nodejs" },
  { src: reactjs, alt: "ReactJs" },
  { src: nextjs, alt: "NextJs" },
  { src: pytorch, alt: "Pytorch" },
  { src: bootstrap, alt: "Bootstrap" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: express, alt: "Express JS" },
  { src: mongo, alt: "Mongo DB" },
  { src: django, alt: "Django" },
  { src: hardhat, alt: "HardHat" },
  { src: metamask, alt: "Metamask" },
  { src: numpy, alt: "Numpy" },
  { src: snntorch, alt: "SNNTorch" },
  { src: postman, alt: "postman" },
  { src: fastapi, alt: "fastapi" },

  //   { src: , alt: "" },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="Languages and Tools" />
      </div>
      <style>{styles}</style>
      <div className="skills-section">
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <img
              key={index}
              src={skill.src}
              alt={skill.alt}
              className="skill-icon"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
