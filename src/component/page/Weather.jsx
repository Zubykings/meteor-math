import React, { useContext } from "react";
import { sunset } from "../../assets";
import CurrentWeather from "../weather/CurrentWeather";
import Navbar from "../Navbar";
import AnimatedLetters from "../AnimatedLetters";
import { motion } from "framer-motion";
import { weather } from "../../App/App";

const Weather = () => {
  const {
    handleSearch,
    setSearchCity,
    searchCity,
    weatherData,
    setWeatherData,
  } = useContext(weather);
  return (
    <div className="w-full h-screen flex lg:flex-row justify-end relative">
      <img src={sunset} alt="" className="w-full object-cover relative" />
      <div className=" w-full fixed bg-transparent absolute z-10 top-0 ">
        <Navbar />
      </div>
      <div className="absolute w-full inset-0 flex md:flex-row flex-col justify-center items-center bg-gradient-to-r from-[#db841100] gap-5 md:gap-0 to-[#4d3a05] ">
        <motion.div
          className={`uppercase md:ps-4 lg:text-[4rem] md:text-[3rem] text-[1.5rem] text-center lg:text-start font-stockholm font-bold text-white md:bg-transparent w-text w-full md:w-1/2  flex items-end md:flex-none ${
            weatherData.name != undefined ? "hidden" : "block h-1/2"
          } `}
        >
          <AnimatedLetters title={`find out what it's like outside`} />
        </motion.div>
        <div
          className={`lg:w-1/2 w-full  m-auto md:inset-y-0 justify-center items-center md:h-full ${
            weatherData.name != undefined ? "" : "h-1/2"
          } `}
        >
          <CurrentWeather />
        </div>
      </div>
    </div>
  );
};

export default Weather;
