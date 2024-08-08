import { createContext, useState } from "react";
export const CounterContext = createContext(null); //create the Createcontext and store into in a variable
export const CounterProvider =(allValue)=>{
     const [ab,setAb]=useState(0)
     const [bb,setBb]=useState(0)
    return(

        <CounterContext.Provider value={{ab,setAb,bb,setBb}}>
                {allValue.children}
        </CounterContext.Provider>
    );
}


