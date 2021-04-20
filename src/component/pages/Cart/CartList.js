
import React from 'react'
import styled from "styled-components"
import CartItem from '../Cart/CartItem';


function CartList({value}) {
    const {cart} = value;
       
    return (
        <CartListWrapper>
            <div className = "cart-list"> 
               
                {cart.map(item =>{
                    return <CartItem key = {item.id} item={item} value = {value} />
                })}
            </div>
        </CartListWrapper>
        
       
    )
}
const CartListWrapper = styled.div`
.cart-list{
    margin-right:500px;
}
`
export default CartList

