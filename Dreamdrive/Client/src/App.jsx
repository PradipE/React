import react from 'react'
import Navbar from './Pages/Navbar.jsx'
import Footer from './Pages/Footer.jsx'
import { Outlet } from 'react-router-dom'

 export function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}


