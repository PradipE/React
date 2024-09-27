import React from "react";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  //we are use the context data
  const CartData = useCart();

  const total = CartData.item.reduce((first, second) => first + second.price, 0)
 // console.log("total",total)
  return (
    <div>
      <h1>Cart</h1>
      {CartData && CartData.item.map((items) => (
          <li >
            {items.name} - ${items.price}
          </li>
        ))}
      <h3>Total Bill: ${total} </h3>
    </div>
  );
};
