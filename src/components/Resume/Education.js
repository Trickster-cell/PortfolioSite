import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Electrical & Electronics Engineering"
            subTitle="Indian Institute of Technology - Patna (2020-2024)"
            result="7.61/10"
            des=""
          />
          <ResumeCard
            title="Senior Secondary School Education"
            subTitle="Krishna Public School (2017-2019)"
            result="90.8%"
            des=""
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Dr. G. L. Dutta D.A.V. Public School (2017)"
            result="9.8/10"
            des=""
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Backend & Blockchain Developer Intern"
            subTitle="Insynk Studios (Apr 2023 - Oct 2023)"
            result="Remote"
            des="Designed a robust, trust-minimized architecture for on-chain credential issuance using more than 10 smart contracts for Polygon Mumbai and Ethereum networks."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
