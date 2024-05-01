import { useState } from 'react'
import React from 'react'

function Add() {
 
    
      const [count ,setCount]=useState(10)
  
  const add=()=>
  {
    if( count <20)
    {
      setCount(count +1)
    }
  }
  const add1=()=>
  {
     if(count>10)
     {
      setCount(count-1)
     }
  }  
  return (
    <>
    <h1>Calculator addition and subtraction</h1>
    <h2>Value is {count}</h2>
    <button onClick={add}>Increase</button>
    <br/>
    <br/>
    <br/>
    <button onClick={add1}>Decrease</button>
   </>
  );
    
  
}

export default Add
