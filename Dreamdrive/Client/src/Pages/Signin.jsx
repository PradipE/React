import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Component/Button.jsx'
 export function Signin() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
        
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className='flex flex-row gap-1 pl-5'>
            <NavLink>
            <p className='text-gray-900 hover:text-green-700 text-xs'>Forgot Password? / </p>
            </NavLink>
            <NavLink to='signup'>  <p className=' text-gray-900 hover:text-green-700 text-xs'>Sign Up</p></NavLink>
          </div>
         <div className=' ml-8 mt-7'>
            <Button
            text="Sign in"/>
         </div>
        </form>
      </div>
    </div>
  )
}


