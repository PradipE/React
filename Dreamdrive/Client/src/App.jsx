import react from 'react'

import { RouterProvider } from 'react-router-dom'
import router from "./Router/Router.jsx"

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
