// here we import the store 
import { createStore } from "redux"
 /*. we are making a reducer that contain two 
 thing according to this project one is state anathor is action is basicalli a
  functionn that define working */
const Reducer = (Data = 0, action) => {
  switch (action.type) {
    case "Increment":
      return Data + 1;
    case "Decrement":
      return Data - 1;
    default:
      return Data;
  }

}
//here we create the the store  and export the reducer function
export const Store = createStore(Reducer);


