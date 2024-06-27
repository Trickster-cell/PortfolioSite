import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col md:flex-row gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Backend & Blockchain Developer Intern"
            subTitle="Insynk Studios (Apr 2023 - Oct 2023)"
            result="Remote"
            des="Designed a robust, trust-minimized architecture for on-chain credential issuance using more than 10 smart contracts for Polygon Mumbai and Ethereum networks."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-4xl font-bold">Volunteer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Assistant Head Coordinator of Training & Placement Cell (C&PH)"
            subTitle="TPC IIT Patna (2023-24)"
            result="IIT Patna"
            des="Negotiated with over 15 recruitment firms as Asst. Head Coordinator at Training & Placement Cell, IIT Patna."
          />
          <ResumeCard
            title="Coordinator of Media & Public Relations"
            subTitle="Infinito 2k22, IIT Patna (2022)"
            result="IIT Patna"
            des="Coordinated Infinito 2k22, IIT Patna, an offline and online annual sports festival, with more than 3000 participants."
          />
          <ResumeCard
            title="Team Member (2020-2022)"
            subTitle="Team Pheonix, IIT Patna Robocon"
            result="IIT Patna"
            des="Played an integral role as a member of the Team Phoenix, achieving a perfect 100 score in round 1 of ABU Robocon, 2020"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
