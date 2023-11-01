import React, { useContext } from "react";
import { location, search } from "../../assets";
// import axios from "axios";
import { weather } from "../../App/App";

const CurrentWeather = () => {
  const {
    handleSearch,
    setSearchCity,
    searchCity,
    weatherData,
    setWeatherData,
  } = useContext(weather);

  return (
    <div className=" uppercase font-semibold text-white overflow-hidden md:bg-gradient-to-r from-[#db841100] font-poppins to-[#4d3a05] px-10 lg:px-0 md:h-full lg:flex-none flex flex-col justify-center">
      <div className="flex flex-col items-center lg:justify-around justify-center h-[80%] inset-0  lg:h-full gap-5 md:gap-0">
        <div
          typeof="search"
          className="w-[80%] md:h-14 h-10 inline-flex items-center bg-[#121a166c] rounded-full px-5 z-50"
        >
          <img src={location} alt="" />
          {/* <p>search</p> */}
          <input
            placeholder="Search City"
            onKeyPress={handleSearch}
            onChange={(e) => setSearchCity(e.target.value)}
            type="search"
            className="w-full bg-transparent input-outline text-base uppercase px-1 "
          />
          <img
            src={search}
            alt=""
            onClick={handleSearch}
            className="cursor-pointer"
          />
        </div>
        {weatherData.name != undefined ? (
          <div className="flex flex-col md:flex-row-reverse h-[80%] gap-5 md:gap-0 w-full">

            <div className="md:w-1/2 w-full text-center flex flex-col items-center justify-center">
              <p>
                {weatherData.name}, {weatherData?.sys?.country}
              </p>
              <p className="text-9xl">
                {weatherData?.main?.temp.toFixed()}
                <span className="ms-1">°</span>
              </p>
              <img
                src={`http://openweathermap.org/img/w/${weatherData?.weather[0]?.icon}.png`}
                alt=""
                className="w-[80px]"
              />

              <p className="">{weatherData?.weather[0]?.description}</p>
            </div>

            <div className="flex flex-col w-full md:w-1/2 items-center text-center gap-4 text-sm tracking-wider justify-around  ">
              <div className="w-full md:py-7 py-2 md:space-y-2 space-y-1 bg-[#261C0D] shadow-lg rounded-2xl ">
                <p className="font-normal">it Feels Like</p>
                <p className="text-2xl">
                  {weatherData?.main?.feels_like.toFixed()}°
                </p>
              </div>

              <div className=" md:py-7 py-2 md:space-y-2 space-y-1 bg-[#261C0D] rounded-2xl w-full shadow-lg ">
                <p className="font-normal">Humidity</p>
                <p className="text-2xl">
                  {weatherData?.main?.humidity.toFixed()}%
                </p>
              </div>

              <div className=" w-full md:py-7 py-2 md:space-y-2 space-y-1 bg-[#261C0D] shadow-lg rounded-2xl ">
                <p className="font-normal">Wind speed</p>
                <p className="text-2xl lowercase">
                  {weatherData?.wind?.speed.toFixed()}K/M
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CurrentWeather;
