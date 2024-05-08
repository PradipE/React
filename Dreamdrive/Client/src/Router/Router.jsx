import {createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import Bodypage from '../Pages/Bodypage.jsx'
import Buy from '../Pages/Buy.jsx'
import Sell from '../Pages/Sell.jsx'
import Rent from '../Pages/Rent.jsx'

 const router=createBrowserRouter([

    {
        path:'',
        element:<Layout/>,
        children:[

            {
                path:'bodypage',
                element:<Bodypage/>,
            },
            {
                path:'buy',
                element:<Buy/>,

            },
            {
                path:'sell',
                element:<Sell/>,

            },
            {
                path:'rent',
                element:<Rent/>,

            },
           
        ],
    },
])
export default router