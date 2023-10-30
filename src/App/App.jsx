import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Hero from "../component/page/Hero";
import Navbar from "../component/Navbar";

const api = {
  key: "4da0705c47a4c25be41dc7842b5c40e5",
  link: "https://api.openweathermap.org/data/2.5",
};
export const Weather = createContext();

const App = () => {
  const [searchCity, setSearchCity] = useState("");
  const [weatherData, setWeatherData] = useState({ weather: [] });


  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log("object");
      fetch(`${api.link}/weather?q=${searchCity}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setWeatherData(result);
        });
    }
    (error) => {
      console.error(error);
    };
  };

  return (
    <Weather.Provider
      value={{
        handleSearch,
        setSearchCity,
        searchCity,
        weatherData,
        setWeatherData,
      }}
    >
      <div id="home" className="h-screen">
        <div className="w-[206vh] fixed bg-transparent z-10 top-0 ">
          <Navbar />
        </div>
        <div className="">
          <Hero />
        </div>
      </div>
    </Weather.Provider>
  );
};

export default App;
