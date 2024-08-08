import { useEffect, useState,useContext } from 'react'
import { Items } from './component/Items';
import { Cart } from './component/Cart';
function App() {
  
 return (
    <>
    <div className='xyz'>
      <Items Name="macbook pro" Price="1500"/>
      <br/>
      <Items Name="xyz" Price="10"/>
      <br/>
      <Items Name="asus vivobook" Price="100"/>
      <br/>
      <Items Name="iphone 15 pro" Price="1200"/>
      <br/>
      <Cart/>
    </div>
    </>
  )
}

export default App;
