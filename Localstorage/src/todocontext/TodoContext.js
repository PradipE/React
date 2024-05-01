/* when we are create  any conntext provider then we are doing the all of these phases 
1st-> We create import createcontext ande usecontext 
2nd -> we are create a const variable that contain a createcontext that contain object or data
3rd-> we are return the createcontext variable using the usecontext and using a anathor const variable
4th-> and export the anathoe variable that contain the usecontext variable and provider
*/
import { createContext,useContext } from "react";
 export const TodoContext =createContext({
    todos:[
        {
            id:2,
            todo:"Task 1",
            completed:false
        }
    ],
    addTodo:(Todo)=>{},
    updateTodo:(Id,Todo)=>{},
    deleteTodo:(Id)=>{},
    toggleComplete:(Id)=>{}
 });

export const useTodo =()=>
{
    return useContext(TodoContext)
    
}
export const TodoProvider=TodoContext.Provider