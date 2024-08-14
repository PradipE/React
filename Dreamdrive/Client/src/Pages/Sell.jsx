import React from 'react'
import sellcar from "../assets/sellcar.jpg"
 export function Sell() {
  return (
    <div className='w-full h-auto grid m-auto'>
      <div className='w-full h-screen ' style={{backgroundImage:`url(${sellcar})`,backgroundSize:'cover'}}>

      </div>
      
    </div>
  )
}


