import { useEffect, useState } from 'react'

// import './App.css'
// import UserContextProvider from './context/UserContextProvider'
// import Login from './component/Login'
// import Profile from './component/Profile'
import { Dataprovider} from './context/Theam'

function App() {
 const[ theammode,setThemmode]=useState("Light")
 const lightmode=()=>
 {
     setThemmode("light")
 }
 const darkmode=()=>
 {
     setThemmode("dark")
 }
 //acctual change in theam
 useEffect(()=>{
  
 },)
 

  return (
    
    <Dataprovider value={{theammode,lightmode,darkmode}}>

    </Dataprovider>
    
  )
}

export default App
