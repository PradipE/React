import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {Menu,X} from "lucide-react"


const Links =()=>
{
    return(
        <div className="text-white">
        <NavLink to="buy" className="font-2xl">BUY</NavLink>
        <NavLink to="sell">SELL</NavLink>
        <NavLink to="rent">RENT</NavLink>
    </div>
    )
   
}
const Navlink=()=>
 {
  const [isOpen,setIsopen] =useState(false)
  const toggoletomobile =()=>
  {
   setIsopen(!isOpen)
  }
  return (
   <>
    <nav className="w-1/6 flex flex-row ">
      <div className="hidden md:flex ">
        <Links/>
      </div>
      <div className="md:hidden">
        <button onClick={toggoletomobile}>
            {isOpen?<X/>:<Menu/>}
        </button>
      </div>
    </nav>
      {isOpen &&(
        <div className="flex flex-col gap-2 items-center basis-full">
            <Links/>
        </div>
      )}
    </>
  );
}

export default Navlink;
