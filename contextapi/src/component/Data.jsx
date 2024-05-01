import React ,{useContext}from 'react'
import UserContext from '../context/UserContext'
function Data() {
    const {submit}=useContext(UserContext)
    if(!submit)return<div>Please login</div>
  return (
    <>
    <div>
        Data is: {submit.pass}
    </div>
    </>
  )
}

export default Data
