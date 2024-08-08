import React from "react";
import { useCart } from "../context/CartContext";

export const Items = (props) => {
  const CartData = useCart();
 //console.log("CartData", CartData)
  return (
    <div className=" ">
      <h2 className="">Name : {props.Name}</h2>
      <h3>Price: ${props.Price} </h3>
      <button onClick={() => { CartData.setItem([...CartData.item,{ItemName: props.name, ItemPrice: props.price },]) }}>
        Add To Cart
      </button>
    </div>
  );
};
