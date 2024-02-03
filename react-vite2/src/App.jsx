import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(20)
  
  
 // let counter=15;
  const addvalue=()=>
  {
    //console.log("value added",counter);
    //counter+=1;
    if(counter<20)
    counter=counter+1;
    setCounter(counter);
  }
  const decresvalue=()=>
  {
    //console.log("Value Decres:",counter);
    if(counter > 0)
    {
      counter=counter-1;
      setCounter(counter);
    }
    
  }
  //const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>Pradip Mondal</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br/>
      <br/>
      <button>Increase Value</button>
      <br/>
      <br/>
      <button onClick={decresvalue}>Decrease value</button>
    </>
  )
}

export default App
