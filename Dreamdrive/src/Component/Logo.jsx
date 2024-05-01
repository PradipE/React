import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo() {
  return (
    <div className='h-20 w-44 '>
      <NavLink to="bodypage">
        <h2 className='text-white'>DREAM <span className='text-green-500'>DRIVE</span></h2>
      </NavLink>
    </div>
  )
}

export default Logo
