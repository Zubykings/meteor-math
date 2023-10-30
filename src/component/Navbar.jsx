import React, { useState } from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        // staggerDirection:-1
        // delayChildren: 0.8,
        // when: "afterChildren"
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const navLinks = [
    {
      label: "Home",
      id: "home",
    },
    {
      label: "Calculator",
      id: "calculator",
    },
    {
      label: "Weather",
      id: "weather",
    },
  ];

  return (
    <div className={`w-full flex `}>
      <motion.nav className="flex w-2/4 justify-center ">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="flex w-3/4 justify-around text-3xl font-brush py-2"
        >
          {navLinks.map((link) => (
            <motion.li
              variants={item}
              // size={50}
              key={link.id}
              className={`${active === link.label ? "text-[#e78f1b]" : ""}`}
              onClick={() => setActive(link.label)}
            >
              <a href={`#${link.id}`}>{link.label}</a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default Navbar;
