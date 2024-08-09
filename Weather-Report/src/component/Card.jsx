import React from "react";
import { useWeather } from "../context/weatherContext";
export const Card = () => {
  const weather = useWeather();
  return (
    <div className=" flex flex-col justify-center items-center gap-4 h-48 w-auto p-4">
      <img className="" src={weather?.apiData?.current?.condition?.icon} />
      <h3 className="text-gray-900 text-2xl font-semibold ">
        {weather?.apiData?.current?.temp_c}
      </h3>
      <h4 className="text-gray-900 text-lg font-semibold ">
        {weather?.apiData?.location?.name}{" "}{weather?.apiData?.location?.country}
      </h4>
    </div>
  );
};
