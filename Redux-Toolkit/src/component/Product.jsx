import React from "react";
import { useDispatch } from "react-redux";
import {addItems} from '../redux/slice/CartSlice.js'
const Product = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-50 h-52 w-64 m-5 rounded-md flex">
      <div className="p-2">
        <img
          className=" w-60 h-24 rounded-md"
          src={props.image}
          alt={props.productName}
        />
        <div className="h-24 w-60 mt-3 ">
          <h2 className="text-sm font-medium text-gray-900">
            {props.productName}
          </h2>
          <h4 className="text-sm font-medium text-gray-900">{props.price}</h4>
          <button onClick={(e)=>{
            dispatch(addItems({name:props.productName,price:props.price}))
          }} 
          className="ml-16 mt-2 text-white bg-green-600 hover:text-green-700 text-sm font-medium h-7 w-24 rounded-md "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
