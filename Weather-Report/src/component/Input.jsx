import React from "react";
import { useWeather,} from "../context/weatherContext";
export const Input = () => {
  const WeatherContextData=useWeather();
  
  return (
    <input
      className="bg-gray-300 h-9 w-[400px] border-spacing-3 rounded-md pl-5 "
      placeholder="Search for location..."
      value={WeatherContextData.userInput}
      onChange={(event) =>{WeatherContextData.setUserInput(event.target.value)}}
    /> 
  );
};
