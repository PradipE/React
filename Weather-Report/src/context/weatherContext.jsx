import { createContext, useContext, useState } from "react"; //import the usecontext and createcontext
import {
  getWeatherDataForLocation,
  getWeatherDataForUserLocation,
} from "../api/Api.js"; //import the api
export const WeatherContext = createContext(null); //here we are doing use the create context
export const useWeather = () => {
  // we are create a hook where we are use the use context
  return useContext(WeatherContext);
};
export const WeatherContextProvider = (WeatherData) => {
  // here we are use provider and wrap all the data that are comes from the context

  const [apiData, setApiData] = useState(null); //this variable for the data that are comes from api and return to user
  const [userInput, setUserInput] = useState(null); // this variable is use for user location search

  const fetchData = async () => {
    const responce = await getWeatherDataForLocation(userInput);
    setApiData(responce);
  };
  const fetchCurrentUserLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataForUserLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((apiData) => setApiData(apiData));
    });
  };
  
  // const refreshData = () => {
  //   if (apiData) {
  //     setApiData(fetchData()); // Re-fetch data based on user input
  //   } else {
  //     fetchCurrentUserLocation(); // Re-fetch data based on current location
  //   }
  // };
  return (
    <WeatherContext.Provider
      value={{
        apiData,
        userInput,
        setUserInput,
        fetchData,
        fetchCurrentUserLocation,
        //refreshData,
      }}
    >
      {WeatherData.children}
    </WeatherContext.Provider>
  );
};
