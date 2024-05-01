import {createContext,useContext} from 'react'
//create Context
 const CreateContext =createContext()
//providecontext
export const Contextprovider=({children})=>
{ 
    return (
        <CreateContext.Provider value={{...state}}>
           {children}
        </CreateContext.Provider>
    )

}
export const Contextdata =()=>
{
   return useContext(CreateContext);
}