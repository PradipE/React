import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/UserContext'
import Profile from './Profile'
import Data from './Data'
function Login() {
    const [username ,setUsername]=useState('')
    const [pass,setPass]=useState('')
    const{setUser}=useContext(UserContext)
    const{setSubmit}=useContext(UserContext)
    const Submit=(e)=>
    {
    
            e.preventDefault()
            setUser({username,pass})

    }
    const Submit1=(e)=>
    {
    
            e.preventDefault()
            setSubmit({username,pass})

    }
  return (
    <div>
      <h2 className=''>Login</h2>
      <input
      value={username}
      onChange={(event)=> setUsername(event.target.value)}
      className=''
       type='text'
       placeholder='username'
       />
       <br/>
       <br/>
       <input
       value={pass}
       onChange={(event)=> setPass(event.target.value)}
       className=''
       type='text'
       placeholder='password'
       />
       <br/>
       <br/>
       <button onClick={Submit}> Submit</button>
       <Profile/>
       <button onClick={Submit1}> Submit</button>
       <Data/>
    </div>
  )
}

export default Login
