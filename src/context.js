import React, { Component,useEffect,useState} from 'react';
import { storeProducts} from './data';
import {Button} from 'antd';

const ProductContext = React.createContext();
 
function ProductProvider(props) {
    const [products,setProducts] =  useState([])
    // const [products,setProducts] =  useState(storeProducts)
    const [cart,setCart] = useState([])
    const[cartSubTotal,setCartSubTotal] = useState(0)
    const[cartTotal,setCartTotal] = useState(0)
    const[cartTax,setCartax] = useState(0)

      

    

    
    useEffect(()=>{
        let tempProducts = [];
        storeProducts.forEach( item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem]; 
            //array of object
            
        });
        setProducts(tempProducts)
     
    },[])
// const testMe = ()=>{
//     console.log("state product:" ,products[0].inCart)
//     console.log("store product:" ,storeProducts[0].inCart)
//     const tempProducts = [...products]
//     tempProducts[0].inCart = true
//     setProducts(tempProducts)
//     console.log("state product:" ,products[0].inCart)
//     console.log("store product:" ,storeProducts[0].inCart)
// }

    const getItem  = (id)=>  {
        const product = products.find(item => 
            item.id === id
        )
        return product
    }



   const addToCart = (id)=>{
        let tempProducts = [...products] 
        console.log(tempProducts)
        const index = tempProducts.indexOf(getItem(id));
        const product = tempProducts[index]
        console.log(product)
        product.count = 1;
        console.log(product.count)
        product.inCart = true;
        const price = product.price;
        product.total = price 
   setProducts( [...tempProducts])
    setCart([...cart, product])
            
          }
        
        

    return (
        <ProductContext.Provider 
              
        value = {{
            products :products,
            addToCart :addToCart,
            getItem : getItem,
            cart:cart,
            cartSubTotal : cartSubTotal,
            cartTotal : cartTotal,
            cartTax :cartTax

}}> 
    {/* <button onClick = {testMe}> test Me </button> */}
    <Button></Button>
            {props.children}
        </ProductContext.Provider>
    )
}
const  ProductConsumer = ProductContext.Consumer;
export {ProductProvider ,ProductConsumer}  

