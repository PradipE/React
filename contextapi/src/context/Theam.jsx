import React,{useContext,createContext} from "react";
export const TheameContext =createContext({
    theammode:'light',
    darkmode: ()=>{},
    lightmode:()=>{},
})
export const Dataprovider=TheameContext.Provider
export const useDataprovider =()=>
{
    return useContext(TheameContext);
}
