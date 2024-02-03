import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./component/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <h1 className='bg-green-400 text-white p-5 rounded-xl mb-10'>Tailwind test</h1>
     <Card userName="Asus VivoBook S15 OLED" btnText="Search"/>
     <br/>
     <Card userName="Acer Aspire 3"btnText="Search"/>
     <br/>
     <Card userName="Asus Vivo Book S14 Oled"btnText="Search"/>
    </>
  )
}

export default App
