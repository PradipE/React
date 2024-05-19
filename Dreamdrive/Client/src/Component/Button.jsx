import React from 'react'

function Button({text,onClick,type}) {
  return (
    <div className=''>
      <button 
      className='bg-green-500 hover:bg-green-700 text-white w-32
       h-9 rounded-lg text-xl pb-1 font-medium font-sans shadow-2xl'
      onClick={onClick}>
        {text}
        {type}
      </button>
    </div>
  )
}

export default Button
