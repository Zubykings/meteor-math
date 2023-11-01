import React, { useEffect, useState } from "react";
import Calculator from "../Calculator";
import axios from "axios";
import CurrentWeather from "../weather/CurrentWeather";
import { sunset } from "../../assets";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import AnimatedLetters from "../AnimatedLetters";
import Navbar from "../Navbar";

const slideInVariants = {
  hidden: { x: -100, y: -100 },
  visible: { x: 0, y: 0 },
};

const Hero = ({ title }) => {
  const [showContent, setShowContent] = useState(false);
  const [showComp, setShowComp] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full flex lg:flex-row h-screen justify-center items-center flex-col "
    >
      <div className="w-full fixed bg-transparent z-10 top-0 ">
        <Navbar />
      </div>

      <motion.div className="flex lg:flex-row flex-col items-center justify-around h-full px-4 lg:px-0 mt-[9vh] w-[90%] ">

        <motion.div className="uppercase lg:text-[4.5rem] md:text-[3.5rem] text-[1.5rem] text-center lg:text-start font-stockholm font-bold text-gray-800">
          <AnimatedLetters
            title={`do you think you're a
             mathe`}
          />
        </motion.div>

        <motion.div
          className=""
          variants={{
            hidden: { y: 400 },
            visible: { y: 0 },
          }}
          transition={{ duration: 1.5 }}
        >
          <Calculator />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
