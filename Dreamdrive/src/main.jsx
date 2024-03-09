import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Bodypage from './Component/Bodypage/Bodypage.jsx'
import Buy from  './Component/Buy/Buy.jsx'
import Sell from './Component/Sell/Sell.jsx'
import Lease from './Component/Lease/Lease.jsx'
const router=createBrowserRouter([
{
  path:'',
  element:<App/>, 
  children:[
    {
       path:'/',
       element:<Bodypage/>
    },
    {
       path:'buy',
       element:<Buy/>
    },
    {
       path:'sell',
       element:<Sell/>
    },
    {
       path:'lease',
       element:<Lease/>
    },

  //Loder concept to fetch data from api
    
  ]
}

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
