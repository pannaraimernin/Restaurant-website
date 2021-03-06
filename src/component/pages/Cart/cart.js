import React from 'react'
import { ProductConsumer } from '../../../context'
import CartColumn from './CartColumn';
import CartList from './CartList'
import CartEmpty from '../Cart/CartEmpty'
import CartTotals from '../Cart/CartTotals'

function Cart(props) {
    return (
        <section>
             <ProductConsumer>
                 {value =>{
                     const {cart} = value;
                     if (cart.length >0){
                         return(
                             <React.Fragment>
                                <CartColumn />
                                <CartList value ={value}/>
                                <CartTotals value ={value}history={props.history}/>
                             </React.Fragment>

                         )
                     }else{
                         return(<CartEmpty/>)
                         
                     }
                 }}
             </ProductConsumer>     
        </section>
    )
}

export default Cart

