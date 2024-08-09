const baseUrl ="https://api.weatherapi.com/v1/current.json?key=ef7556c9f00243fea13111934240808";

export const getWeatherDataForLocation = async (city)=>{
const response= await fetch(`${baseUrl}&q=${city}&aqi=yes`);
return await response.json();
}
export const getWeatherDataForUserLocation = async (lat,lon)=>{
    const response= await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
    }
