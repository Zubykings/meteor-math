// import React, {useContext} from "react";
// import { forecastData, } from "../constant";
// import { clock, cloud } from "../../assets";
// import { Weather } from "../../App/App";


// const Forecast = () => {

//   const {handleSearch,
//     setSearchCity,
//     searchCity,
//     weatherData,
//     setWeatherData,} = useContext(Weather)



//   return (
//     <div className="pe-7 flex flex-col justify-around h-full ">
//       {/* <img src={cloud} alt="" className="w-full" /> */}
//       <div className=" p-4 rounded mt-4 bg-[#121a166c] rounded-2xl py-4">
//         <div className="inline-flex py-3 items-center text-center gap-2">
//           <img src={clock} alt="" />
//           <h2 className=" uppercase font-semibold">3-4 Days Forecast</h2>
//         </div>
//         <span className="w-full border flex border-[#93c7ace3] rounded-full"></span>
//         <div className="flex justify-around py-3 font-semibold">
//           {forecastData.map((day, index) => (
//             <div
//               key={index}
//               className="w-1/5 text-center hover:bg-[#46775e49] cursor-pointer py-3 rounded-2xl "
//             >
//               <p>{day.day}</p>
//               <p>{day.temp_max}°C</p>
//               <p>{day.temp_min}°C</p>
//               <p>{day.description}</p>
//               {/* <img src={`http://openweathermap.org/img/w/${day.icon}.png`} alt="Weather Icon" /> */}
//             </div>
//           ))}
//         </div>
//         <span className="w-full border-4 border-[#93c7ace3] rounded-full flex mt-4"></span>
//       </div>


//       <div className=" p-4 rounded mt-4 bg-[#121a166c] rounded-2xl py-4">
//         <div className="inline-flex py-3 items-center text-center gap-2">
//           <img src={clock} alt="" />
//           <h2 className=" uppercase font-semibold">3-4 Days Forecast</h2>
//         </div>
//         <span className="w-full border flex border-[#93c7ace3] rounded-full"></span>
//         <div className="flex justify-around py-3 font-semibold">
//           {forecastData.map((day, index) => (
//             <div
//               key={index}
//               className="w-1/5 text-center hover:bg-[#46775e49] cursor-pointer py-3 rounded-2xl "
//             >
//               <p>{day.day}</p>
//               <p>{day.temp_max}°C</p>
//               <p>{day.temp_min}°C</p>
//               <p>{day.description}</p>
//               {/* <img src={`http://openweathermap.org/img/w/${day.icon}.png`} alt="Weather Icon" /> */}
//             </div>
//           ))}
//         </div>
//         <span className="w-full border-4 border-[#93c7ace3] rounded-full flex mt-4"></span>
//       </div>
//     </div>
//   );
// };

// export default Forecast;
