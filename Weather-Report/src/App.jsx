import { useState,useEffect } from "react";
import { Button } from "./component/Button";
import { Input } from "./component/Input";
import { Card } from "./component/Card";
import { useWeather } from "./context/weatherContext";
function App() {
  const weather = useWeather();
 // console.log(weather)
 useEffect(()=>{
   weather.fetchCurrentUserLocation()
 },[])
// console.log(weather)
  return (
    <>
      <div className="flex flex-col justify-center items-center  bg-gray-400 h-screen">
        <h1 className="text-green-700 text-3xl font-bold content-center">
          Weather Report{" "}
        </h1>
        <div className="flex flex-col gap-5 pt-8 w-full justify-center items-center">
          <div className=" flex flex-row gap-1">
            <Input />
            <Button onClick ={weather.fetchData} value="Search"/>
          </div>
          <div>
            <Card />  
          </div>
          <div>
            <Button value="Refresh"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
