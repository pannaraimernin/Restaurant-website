import React from 'react'
import { Link } from 'react-router-dom';
// import PayPalButton from '../Cart/PayPalButton'

function CartTotals({value}) {
    const {cartSubTotal,cartTax,cartTotal,clearCart} = value;
   
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default CartTotals
