import React from "react";
export const Button = (props) => {
  return (
    <button className=" bg-green-700 hover:bg-green-800 w-28 h-9 rounded-md text-white font-semibold " onClick={props.onClick}>
      {props.value}
     
    </button>
  );
};
