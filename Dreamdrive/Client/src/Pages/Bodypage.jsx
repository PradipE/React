import React, { useState } from 'react'
import carbody from '../assets/carbody.jpg'

import Buyguide from '../Component/Buyguide'
export function Bodypage() {
 
  return (
       <>
       <div className='w-full h-auto grid'>
        <div className='h-screen w-full' style={{backgroundImage:`url(${carbody})`,backgroundSize:'cover'}}> </div>
           <div>
            <Buyguide/>
           </div>
       </div>
       </>
  )
}


