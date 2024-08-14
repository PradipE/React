import {createContext,useContext} from 'react'
//create Context
 const CreateContext =createContext()
 //create a hook to use context data 
    export const Contextdata =()=>
    {
       return useContext(CreateContext);
    }
//providecontext
export const ContextProvider=({})=>
{ 
    return (
        <CreateContext.Provider value={{}}>
           {}
        </CreateContext.Provider>
    )

}
