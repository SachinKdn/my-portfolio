import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, skills }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg mb-1">
          {position}{" "}
          <span
            className="capitalize text-slideGreen dark:text-primaryDark"
          >
            {company}
          </span>
        </h3>
        <div className="flex flex-col gap-0 items-start">

        {skills.map((skill, index)=><span key={index} className="font-medium w-full md:text-sm mt-2">⦿ {skill}</span>)}
        </div>
        {/* <p className="font-medium w-full md:text-sm"> {work}</p> */}
      </motion.div>
    </li>
  );
};

const SkillsListing = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:text-4xl md:mb-8">
        Technical Skills
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend"
            company="Technologies "
            skills={['HTML | CSS | Material UI | Tailwind CSS', 'ReactJs', 'NextJs', 'React Native']}
           />

          <Details
            position="Backend"
            company="Technologies "
            skills={['NodeJs', 'ExpressJs', 'MongoDB', 'MySQL', 'GraphQL']}
            />
        <Details
            position="Programming"
            company="Languages "
            skills={['Java', 'C/C++', 'JavaScript', 'TypeScript','SQL']}
            />
        <Details
            position="Additional"
            company="Technologies "
            skills={['AWS S3', 'AWS EC2', 'AWS IAM', 'StoryBlok CMS', 'Search Engine Optimization (SEO)', 'Git/GitHub']}
            />
        </ul>
      </div>
      
    </div>
  );
};

export default SkillsListing;
