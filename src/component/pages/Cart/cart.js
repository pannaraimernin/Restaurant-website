import React from 'react'
import { ProductConsumer } from '../../../context'
import CartColumn from './CartColumn';
import CartList from './CartList'
import Title from '../../Title';
import CartEmpty from '../Cart/CartEmpty'
import CartTotals from '../Cart/CartTotals'

function Cart() {
    return (
        <section>
             This is cart component
             <ProductConsumer>
                 {value =>{
                     const {cart} = value;
                     if (cart.length >0){
                         return(
                             <React.Fragment>
                                 <Title name = "your" title = "cart"/>
                                <CartColumn />
                                <CartList value ={value}/>
                                <CartTotals value ={value} />
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

