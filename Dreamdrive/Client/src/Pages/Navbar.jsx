import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import Button from "../Component/Button.jsx";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  
  const [nav, setNav] = useState(false);
  

  const Buttonstyle = {
    backgroundColor: "#2db300",
    height: "35px",
    width: "110px",
    borderRadius: "10px",
    border: "none",
    fontSize: "17px",
    fontWeight: "semibold",
    color: "white",
  };
  const Buttonstyl = {
    backgroundColor: "#2db300",
    height: "35px",
    width: "100px",
    borderRadius: "10px",
    border: "none",
    fontSize: "15px",
    fontWeight: "semibold",
    color: "white",
  };
 
  const Handlenav = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-gray-100 flex  justify-between items-center  mx-auto px-10 h-24 sticky top-0 z-auto">
      <div className="flex">
        <NavLink
          to="bodypage"
          className="text-green-600 text-3xl font-bold w-full "
        >
          DREAM
          <br />
          DRIVES
        </NavLink>
      </div>
      <ul className=" gap-10 sm:flex hidden">
        <li className="p-5 ">
          <NavLink
            to="buy"
            className="text-gray-900 hover:text-green-600 text-3xl  font-bold"
          >
            BUY
          </NavLink>
        </li>
        <li className="p-5">
          <NavLink
            to="sell"
            className="text-gray-900 hover:text-green-600 text-3xl  font-bold"
          >
            
            SELL
          </NavLink>
        </li>
        <li className="p-5">
          <NavLink
            to="rent"
            className="text-gray-900  hover:text-green-600 text-3xl  font-bold"
          >
            RENT
          </NavLink>
        </li>
      </ul>

      <div className="hidden sm:flex">
       <Button text="Sign in"onClick={{}}/>
        
      </div>
      <div onClick={Handlenav} className=" md:hidden">
        {!nav ? (
          <AiOutlineMenu size={20} color="gray" />
        ) : (
          <AiOutlineClose size={20} color="gray" />
        )}
      </div>
      <div
        className={ 
          nav? "fixed  w-[50%] h-full left-0 top-0 border-r-white bg-white ease-in-out duration-700"
            : "fixed left-[-50%] "
        }
      >
        <div className="flex">
          <NavLink
            to="bodypage"
            className="text-green-600 text-3xl font-bold w-full p-10"
          >
            DREAM
            <br />
            DRIVES
          </NavLink>
        </div>
        <ul className="">
          <li className="p-5 ">
            <NavLink
              to="buy"
              className="text-gray-900 hover:text-green-600 text-3xl font-semibold p-5 "
            >
              BUY
            </NavLink>
          </li>
          <li className="p-5">
            <NavLink
              to="sell"
              className="text-gray-900 hover:text-green-600 text-3xl font-semibold p-5 "
            >
              
              SELL
            </NavLink>
          </li>
          <li className="p-5">
            <NavLink
              to="rent"
              className="text-gray-900  hover:text-green-600 text-3xl font-semibold p-5"
            >
              RENT
            </NavLink>
          </li>
        </ul>
        <div className="p-7">
        <Button text="Sign in" onClick={{}}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
