import { useEffect, useState } from 'react'

function App() {
  const [ab,setAb]= useState(0)
  
  useEffect(()=>{
   console.log("xasx")
  },[increment,decrement])
  function increment(){
       if(ab <30)
       {
        setAb(ab+1)
       }
  }
  function decrement(){
    if(ab>0)
    {
      setAb(ab-1)
    }
  }
  return (
    <>
        <button onClick={increment}>+</button>
        <span>{ab}</span>
        <button onClick={decrement}>-</button>

    </>
  )
}

export default App
