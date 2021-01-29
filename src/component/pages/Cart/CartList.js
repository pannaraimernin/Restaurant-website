import Item from 'antd/lib/list/Item';
import React,{useState} from 'react'
import { ProductConsumer } from '../../../context';
import CartItem from '../Cart/CartItem';


function CartList({value}) {
    const {cart} = value;
       
    return (
        
            <div>
               
                <h1>cart list</h1>
                {cart.map(item =>{
                    return <CartItem key = {item.id} item={item} value = {value} />
                })}
               
                
                    
               

                
              
            
        </div>
        
       
    )
}

export default CartList
