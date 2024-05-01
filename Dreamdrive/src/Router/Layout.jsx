import React from 'react'
import Navbar from '../Pages/Navbar.jsx'
import Footer  from '../Pages/Footer.jsx'
import {Outlet} from 'react-router-dom'
function Layout()
{
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
    
}
export default Layout