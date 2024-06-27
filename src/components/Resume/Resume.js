import React, { useState } from "react";
import Title from "../Layouts/Title";
import Education from "./Education";
// import Skills from "./Skills";
// import Achievement from './Achievement';
import Experience from "./Experience";
import { FiDownload } from "react-icons/fi";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  //   const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  //    const [achievementData, setAchievementData] = useState(false);
  const resumeLink = "https://drive.google.com/file/d/1Xloehbxl_GoQFgkj2qPPXGfikkAgXmf2/view?usp=drive_link";
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      {/* <div className="flex justify-center items-center text-center">
        <Title title="7+ YEARS OF EXPERIENCE" des="My Resume" />
      </div> */}

      <div className="w-full flex flex-col m-5">
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-auto font-semibold h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300"
        >
          <span>R E S U M E</span>
          <FiDownload className="ml-4" />
        </a>
      </div>

      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <li
            onClick={() =>
              setEducationData(true) &
              //   setSkillData(false) &
              setExperienceData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>

          <li
            onClick={() =>
              setEducationData(false) &
              //   setSkillData(false) &
              setExperienceData(true)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
