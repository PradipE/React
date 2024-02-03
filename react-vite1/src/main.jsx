import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Name from './Function.jsx'
//initilize function into main
function CustomApp()
{
  return (
    <>
     <h1>Custom App</h1>
    </>
  )
}
//initilize code in format of object
// const reactElement={
//   type:'a',
//   props:{
//       herf:'https://google.com',
//       target:'blank',
//   },
//   children:'click me to visit google'
// }
//initilize anathor element
const anathorElement=
(
  <a href="https://google.com" target='black'>Pradip Mondal</a>
)
//anathor react element 
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'blank'},
  'click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //anathorElement
  //reactElement
  <App/>
)
