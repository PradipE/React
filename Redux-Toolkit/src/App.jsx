import { useState } from 'react'
import Products from './data/Products.js'
import Cart from './component/Cart.jsx'
import Product from './component/Product.jsx'
function App() {
  //const [count, setCount] = useState(0)

  return (
    
      <div className=''>
         <div>
             <Cart/>
         </div>
         <div className='flex flex-wrap'>
            {Products.map((props)=> {
              return(
                 <Product key={props.id} {...props}/>
              );
             })}
         </div>
      </div>
    
  )
}

export default App
