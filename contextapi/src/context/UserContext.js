/*first we create a variable that contain createcontext and we are export this variable
 in this create context its a global variable that store any value when we are wrape any file inside the 
 createcontext provider  you can acesses all the value of createcontext provider in all files that are wrap 
 in the createcontext provider */
import React from "react";
const UserContext=React.createContext();

export default UserContext;