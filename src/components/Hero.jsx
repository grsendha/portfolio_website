import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputerCanvas from "../components/canvas/Computers";
import ScrollIcon from "./ScrollIcon";
import { social } from "../constants";

const Hero = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello there, I'm{" "}
            <span className="text-[#915eff] ">Gyanaranjan Sendha</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            I am a Full Stack Developer, And here is my Portfolio.
          </p>
          <div className=" sm:hidden flex flex-row gap-5 items-start mt-4  px-4 py-3 ">
            {social.map((item) => (
              <a
                href={item.link}
                download={item.name == "Resume" && item.link}
                target="_blank" // Add this line to open link in new window
                rel="noopener noreferrer" // Add this line for security reasons
                className=" h-12 w-12 flex  items-start justify-center  cursor-pointer z-40"
                key={item.name}
              >
                <img
                  src={item.icon}
                  className="cursor-pointer z-80 "
                  alt={item.alt}
                />
              </a>
            ))}
          </div>
        </div>
        <div className=" hidden lg:flex flex-col gap-5 items-start mt-4  px-4 py-3 ">
          {social.map((item) => (
            <a
              href={item.link}
              download={item.name == "Resume" && item.link}
              target="_blank" // Add this line to open link in new window
              rel="noopener noreferrer" // Add this line for security reasons
              onClick={handleClick}
              className=" h-12 w-12 flex  items-start justify-center  cursor-pointer z-40"
              key={item.name}
            >
              <img
                src={item.icon}
                className="cursor-pointer z-80 "
                alt={item.alt}
              />
            </a>
          ))}
        </div>
      </div>

      <ComputerCanvas />
      <ScrollIcon id="about" />
    </section>
  );
};

export default Hero;
