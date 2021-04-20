import React from 'react'
import styled from "styled-components"

function CartColumn() {
    return (
        <CartWrapper>
             <div className ="Cart-column">
             <div className = "col-1" >Products</div>
             <div className = "col-2">Name</div>
             <div className = "col-3">Price</div>
             <div className = "col-4">Quantity</div>
             <div className = "col-5">Remove</div>
             <div className = "col-6">Total</div>

        </div>
        </CartWrapper>
       
    )
}
const CartWrapper = styled.div`

.Cart-column{
    margin-top:25px;
    background-color: #F8BD45;
    width: 1050px;
    border-radius: 25px;
    padding: 15px; 
    display: grid;
}
.col-1{
    grid-column: 1;
    grid-row: 1;
}
.col-2{
    grid-column: 2;
    grid-row: 1;
}
.col-3{
    grid-column: 3;
    grid-row: 1;
}
.col-4{
    grid-column: 4;
    grid-row: 1;
}
.col-5{
    grid-column: 5;
    grid-row: 1;
}
.col-6{
    grid-column: 6;
    grid-row: 1;
}`

export default CartColumn
