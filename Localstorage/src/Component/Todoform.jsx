import React, { useState } from 'react'
import { useTodo } from '../todocontext/TodoContext.js'

function Todoform() {
    const [todo,setTodo]=useState("")
    const {addTodo}=useTodo()
    const add=(event)=>
    {
        event.preventDefault()
        if(!todo) return 
        addTodo({todo,completed:false})
        setTodo("")
    }
  return (
    
    <form
     onSubmit={add}
     className='flex'>
      <input
      value={todo}
      onChange={(event) =>setTodo(event.target.value)}
      type='text'
      placeholder='Write Todo...'
      className='w-full border border-black/15
      rounded-l-lg px-3 outline-none duration-200
      bg-white/20 py-1.5'
      />
      <button
      type='submit'
      className='rounded-r-lg px-3 py-1 bg-green-500
      shrink-0'
      >
        Add
      </button>

    </form>
  )
}

export default Todoform
