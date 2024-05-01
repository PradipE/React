import React, { useState } from 'react'
import UserContext from './UserContext'
const UserContextProvider=({children})=> {
    const[user,setUser]=useState(null)
    const[submit,setSubmit]=useState(null)
  return (
    <UserContext.Provider value={{user,setUser,submit,setSubmit}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
