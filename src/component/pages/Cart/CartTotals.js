import React from 'react'
import { Link } from 'react-router-dom';
// import PayPalButton from '../Cart/PayPalButton'
import styled from "styled-components"

function CartTotals({value}) {
    const {cartSubTotal,cartTax,cartTotal,clearCart} = value;
   
    return (
        <TotalWrapper>
            <div className = "Cart-total">
            <Link to = "/">
                <button onClick={()=>clearCart()}>Clear cart</button>
            </Link>
            <h5>
                <span> Subtotal :</span>
                <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
                <span> Tax :</span>
                <strong>$ {cartTax}</strong>
            </h5>
            <h5>
                <span> Total :</span>
                <strong>$ {cartTotal}</strong>
            </h5>
            {/* <PayPalButton total ={cartTotal} clearCart = {clearCart} history = {history}/> */}
            </div>
            </TotalWrapper>
    )
}
const TotalWrapper = styled.div`
.Cart-total{
    margin-left: 700px;
}
`
export default CartTotals
