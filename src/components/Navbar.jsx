import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";
import { SectionWrapper } from "../hoc";
import toast from "react-hot-toast";
import DropDown from "./DropDown";
import { social } from "../constants";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setActive("");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <img
            src="./logo.png"
            alt="logo"
            className="w-11 h-11 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Gyanaranjan.dev
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[20px]  cursor-pointer`}
                onClick={() => {
                  setActive(nav.title);
                }}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <DropDown />
          {/* <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 cursor-pointe object-contain"
            onClick={() => setToggle(!toggle)}
          /> */}

          {/* <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex  justify-end items-start flex-col gap-4">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    className={`${
                      active === nav.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium text-[18px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
