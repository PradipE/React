import React, { useState } from 'react'
import carbody from '../assets/carbody.jpg'
import { useNavigate } from 'react-router-dom'
import Buyguide from '../Component/Buyguide'
function Bodypage() {
 
  const Navigation= useNavigate()
  return (
       <>
       <div className='w-full h-auto grid  '>
        <div className='h-screen w-full' style={{backgroundImage:`url(${carbody})`,backgroundSize:'cover'}}> </div>
        <div>
            <Buyguide/>
        </div>
              
       
        
         

       </div>
       </>
  )
}

export default Bodypage
