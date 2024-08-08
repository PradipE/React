import { createContext ,useContext,useState} from "react";
export const CartContext=createContext(null);
export const useCart =()=>{
    const CartData = useContext(CartContext);
    return CartData;
};

export const CartProvider =(props)=>{
    const [item,setItem]=useState([]);
    
    return(
        <CartContext.Provider value={{item,setItem}}>
            {props.children}
        </CartContext.Provider>
    )

}