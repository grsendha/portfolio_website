import React from "react";
import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} `}>Tech Stacks.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech, index) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} color={tech.color} />
            <p className="text-white text-center mt-2">{tech.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
