
import React from 'react'

import CartItem from '../Cart/CartItem';


function CartList({value}) {
    const {cart} = value;
       
    return (
        
            <div>
               
                {cart.map(item =>{
                    return <CartItem key = {item.id} item={item} value = {value} />
                })}
               
                
                    
               

                
              
            
        </div>
        
       
    )
}

export default CartList
