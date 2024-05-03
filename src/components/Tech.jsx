import React from "react";
import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { languages, frameworks, tools, databases } from "../constants";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import TechCard from "./TechCard";
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} `}>Tech Stacks.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("right", "spring", "", 1)}
        className="mt-10 "
      >
        <h2 className={`${styles.heroSubText} `}> Programming Languages</h2>
      </motion.div>
      <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <div className="flex flex-row flex-wrap justify-start gap-10">
        {languages.map((tech, index) => (
          <div className="w-28 h-28" key={tech.name}>
            <TechCard image={tech.icon} name={tech.name} />
            {/* <p className="text-white text-center mt-2">{tech.name}</p> */}
          </div>
        ))}
      </div>
      <motion.div variants={fadeIn("right", "spring", "", 1)} className="mt-10">
        <h2 className={`${styles.heroSubText} `}> Libraries/Frameworks</h2>
      </motion.div>
      <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <div className="flex flex-row flex-wrap justify-start gap-10">
        {frameworks.map((tech, index) => (
          <div className="w-28 h-28" key={tech.name}>
            <TechCard image={tech.icon} name={tech.name} />
          </div>
        ))}
      </div>
      <motion.div variants={fadeIn("right", "spring", "", 1)} className="mt-10">
        <h2 className={`${styles.heroSubText} `}> Tools /Platforms</h2>
      </motion.div>
      <hr className=" my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <div className="flex flex-row flex-wrap justify-start gap-10">
        {tools.map((tech, index) => (
          <div className="w-28 h-28" key={tech.name}>
            <TechCard image={tech.icon} name={tech.name} />
          </div>
        ))}
      </div>
      <motion.div variants={fadeIn("right", "spring", "", 1)} className="mt-10">
        <h2 className={`${styles.heroSubText} `}> Databases</h2>
      </motion.div>
      <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <div className="flex flex-row flex-wrap justify-start gap-10">
        {databases.map((tech, index) => (
          <div className="w-28 h-28" key={tech.name}>
            <TechCard image={tech.icon} name={tech.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
