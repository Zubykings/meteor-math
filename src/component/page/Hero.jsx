import React, { useEffect, useState } from "react";
import Calculator from "../Calculator";
import axios from "axios";
import CurrentWeather from "../weather/CurrentWeather";
import { sunset } from "../../assets";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import AnimatedLetters from "../AnimatedLetters";

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
      className="md:w-[420vh] h-screen flex md:flex-row flex-col "
    >
      <motion.div
        id="calculator"
        className="flex md:flex-row flex-col justify-around mt-[9vh] items-center md:w-[210vh] bg-transparent"
      >
        <motion.div className="uppercase text-7xl font-stockholm font-bold text-gray-800 w-1/2">
          <div className="w-[110%]">
            <AnimatedLetters
              title={`do you think you're a
             mathe`}
            />
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { y: 400 },
            visible: { y: 0 },
          }}
          transition={{ duration: 1.5 }}
        >
          <Calculator />
        </motion.div>
      </motion.div>

      <div id="weather" className="md:w-[210vh] flex justify-end relative">
        <img src={sunset} alt="" className="w-full object-cover relative" />
        <div className="w-1/2 absolute inset-y-0 justify-end ">
          <CurrentWeather />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
