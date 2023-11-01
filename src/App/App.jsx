import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Hero from "../component/page/Hero";
import Navbar from "../component/Navbar";
import WeatherPage from "../component/page/Weather";
import { Route, Router, Routes } from "react-router-dom";

const api = {
  key: "4da0705c47a4c25be41dc7842b5c40e5",
  link: "https://api.openweathermap.org/data/2.5",
};
export const weather = createContext();

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
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <weather.Provider
      value={{
        handleSearch,
        setSearchCity,
        searchCity,
        weatherData,
        setWeatherData,
      }}
    >
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/calculator" element={<Hero />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
      {/* </Router> */}
      {/* <div id="home" className="h-screen">
        
        <Hero />
        <WeatherPage />
      </div> */}
    </weather.Provider>
  );
};

export default App;
