import React, { useContext } from "react";
import { location, search } from "../../assets";
// import axios from "axios";
import { Weather } from "../../App/App";

const CurrentWeather = () => {
  const {
    handleSearch,
    setSearchCity,
    searchCity,
    weatherData,
    setWeatherData,
  } = useContext(Weather);

  return (
    <div className=" uppercase font-semibold text-gray-200/90 overflow-hidden rounded-2xl bg-gradient-to-r from-[#db841100] font-poppins to-[#4d3a05] h-full">
      <div className="flex flex-col items-center justify-around inset-0  h-full">
        <div
          typeof="search"
          className="w-[80%] h-10 inline-flex items-center bg-[#121a166c] rounded-full px-5 z-50"
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
          <div className="flex flex-row-reverse h-[80%] w-full">
            <div className="w-1/2 text-center flex flex-col items-center justify-center">
              <p>
                {weatherData.name}, {weatherData?.sys?.country}
              </p>
              <p className="text-9xl text-white">
                {weatherData?.main?.temp.toFixed()}
                <span className="ms-1">°</span>
              </p>
              <img
                src={`http://openweathermap.org/img/w/${weatherData?.weather[0]?.icon}.png`}
                alt=""
                className="w-[70px]"
              />

              <p className="">{weatherData?.weather[0]?.description}</p>
            </div>

            <div className="flex flex-col w-1/2 items-center text-center gap-4 text-sm tracking-wider justify-around  ">
              <div className="w-full py-7 space-y-2 bg-[#261C0D] shadow-lg rounded-2xl ">
                <p className="font-normal">it Feels Like</p>
                <p className="text-2xl">
                  {weatherData?.main?.feels_like.toFixed()}°
                </p>
              </div>

              <div className=" py-7  space-y-2 bg-[#261C0D] rounded-2xl w-full shadow-lg ">
                <p className="font-normal">Humidity</p>
                <p className="text-2xl">
                  {weatherData?.main?.humidity.toFixed()}%
                </p>
              </div>

              <div className=" w-full py-7 space-y-2 bg-[#261C0D] shadow-lg rounded-2xl ">
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
