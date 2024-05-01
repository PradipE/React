import React from 'react'
import Logo from '../Component/Logo.jsx'
import Navlink from '../Component/Navlink.jsx'
function Navbar() {
  return (
   <header className='bg-gray-600 sticky top-0 z-[10] mx-auto 
   w-full flex items-center justify-between h-24 '>
     <Logo/>
     <Navlink/>
   </header>
  )
}

export default Navbar
