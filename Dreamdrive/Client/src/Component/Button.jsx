import React from 'react'

function Button({text,onClick,style}) {
  return (
    <div className=''>
      <button onClick={onClick} style={style}>
        {text}
      </button>
    </div>
  )
}

export default Button
