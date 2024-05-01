import React, { useState } from 'react'

function Bg() {
    const [color,setColor]=useState("whitesmoke")
  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor:color}}>
        <div className="flex flex-row gap-10 justify-center pt-10">
          <button onClick={()=> setColor("red")}
           className="w-20 h-10 rounded-md text-xl text-white outline-none "  style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=> setColor("green")}
           className="w-20 h-10 rounded-md text-xl text-white outline-none" style={{backgroundColor:"green"}}>green</button>
          <button  onClick={()=> setColor("orange")}
            className="w-20 h-10  rounded-md text-xl text-white outline-none " style={{backgroundColor:"orange"}}>orange</button>
          <button  onClick={()=> setColor("yellow")}
          className="w-20 h-10  rounded-md text-xl text-black outline-none" style={{backgroundColor:"yellow"}}>yellow</button>
        </div> 
    </div>
    </>
  )
}

export default Bg
