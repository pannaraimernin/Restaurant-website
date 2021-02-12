import React from 'react'
import styled from "styled-components"

function CartColumn() {
    return (
        <CartWrapper>
             <div className ="Cart-column">
             <div >products</div>
             <div >name of product</div>
             <div >price</div>
             <div>quantity</div>
             <div>remove</div>
             <div>total</div>

        </div>
        </CartWrapper>
       
    )
}
const CartWrapper = styled.div`
.Cart-column{
    display : block; 
}`

export default CartColumn
