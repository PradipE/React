import React from 'react'
import { useSelector } from 'react-redux'
const Working = () => {
    const value =useSelector(state=>state)
  return (
    <div>
        <h2>{value}</h2>
    </div>
  )
}

export default Working
