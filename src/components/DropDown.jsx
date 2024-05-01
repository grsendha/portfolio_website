import { useState } from "react";
import { motion } from "framer-motion";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`menu flex item-center justify-end sm:hidden  `}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-6 h-6 cursor-pointe object-contain"
          onClick={() => setToggle(!toggle)}
        />
      </motion.button>
      <motion.ul
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] bg-primary z-10 rounded-xl list-none flex  justify-end items-start flex-col gap-4`}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {navLinks.map((nav) => (
          <motion.li key={nav.id} variants={itemVariants}>
            <a
              href={`#${nav.id}`}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } font-poppins font-medium text-[18px] cursor-pointer`}
              onClick={() => {
                setIsOpen(!isOpen);
                setToggle(!toggle);
                setActive(nav.title);
              }}
            >
              {nav.title}
            </a>
          </motion.li>
        ))}

        {/* <motion.li variants={itemVariants}>About</motion.li>
        <motion.li variants={itemVariants}>Projects</motion.li>
        <motion.li variants={itemVariants}>Contact</motion.li> */}
      </motion.ul>
    </motion.nav>
  );
}
