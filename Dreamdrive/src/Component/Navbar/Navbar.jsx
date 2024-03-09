import React from 'react'
import { Link,NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      
        <nav className=" shadow-sm bg-neutral-700 fixed min-w-full">
            <div className="flex justify-between items-center ">
                <div>
                    <h1 className='text-2xl font-extrabold pl-10 text-white'>DREAM <br/><span className='text-green-300'>DRIVES</span> </h1>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex  items-center gap-8 m-8 '>
                    <li>
                                <NavLink
                                to="/"
                                    className={({}) =>
                                        ` p-5 text-white hover:border-b-2 hover:text-
                                        primary hover:border-primary transition-colors duration-500 text-2xl font-medium`
                                    }
                                >
                                    
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="Buy"
                                className={({isActive}) =>
                                `  ${isActive ? "text-green-300":"text-white"}   p-5 text-white hover:border-b-2 hover:text-
                                primary hover:border-primary transition-colors duration-500 text-2xl font-medium`
                            }
                                >
                                 BUY   
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="sell"
                                className={({isActive}) =>
                                `  ${isActive ? "text-green-300":"text-white"}   p-5 text-white hover:border-b-2 hover:text-
                                primary hover:border-primary transition-colors duration-500 text-2xl font-medium`
                            }
                                >
                                    SELL
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="lease"
                                className={({isActive}) =>
                                `  ${isActive ? "text-green-300":"text-white"}   p-5 text-white hover:border-b-2 hover:text-
                                primary hover:border-primary transition-colors duration-500 text-2xl font-medium`
                            }
                                >
                                    LEASE
                                </NavLink>
                            </li>
                    </ul>
                </div>
                <div className='mr-20'>
                  <div className='mb-2 ml-16'>
                    <p className='text-white' >Login/Register</p>
                  </div>
                  <div>
                    <input type='text' placeholder='Search for location...' className='rounded-xl h-8 w-60 bg-zinc-300 pl-5 pb-1'></input>
                  </div>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default Navbar
