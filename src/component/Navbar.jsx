import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      to: "/",
    },
    {
      label: "Calculator",
      id: "calculator",
      to: "/calculator",
    },
    {
      label: "Weather",
      id: "weather",
      to: "/weather",
    },
  ];

  return (
    <div className={`w-full flex `}>
      <motion.nav className="flex w-full lg:w-2/4 justify-center ">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="flex w-3/4 justify-around md:text-3xl font-brush py-2"
        >
          {navLinks.map((link) => (
            <Link
              to={link.to}
              variants={item}
              key={link.id}
              className={`${active === link.label ? "text-[#e78f1b]" : ""}`}
              onClick={() => setActive(link.label)}
            >
              <a href={`#${link.id}`}>{link.label}</a>
            </Link>
          ))}
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default Navbar;
