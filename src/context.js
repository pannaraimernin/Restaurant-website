import React, { Component,useEffect,useState} from 'react';
import {detailProduct, storeProducts} from './data';

const ProductContext = React.createContext();
 
function ProductProvider(props) {
    const [products,setProducts] =  useState([])
    const [detail,setDetailProduct] =  useState(detailProduct)
    const [cart,setCart] = useState([])

     useEffect(()=>{
         setData()
      })

     const setData =()=>{
        let products = [];
        storeProducts.forEach( item =>{
            const singleItem = {...item};
            products = [...products,singleItem]; //array of object
            
        });
        console.log(`products: ${products}`)
            console.log( typeof products)
        setProducts( 
             {products}
        );
        console.log(products)
    }

    const getItem  = (id)=>  {
        const product = products.find(item => 
            item.id === id
        )
        return product
    }

    const handDetail = (id)=>{
        console.log('hello from detail')
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
        console.log(product)
        console.log(typeof products)
   setProducts(() => {
            return {
                products: [...tempProducts],
              cart: [...cart, product],
            };
          });
        };
        

    return (
        <ProductContext.Provider 
        value = {{ 
        products,
        cart,
        detail ,
        getItem,
        handDetail,
        addToCart }}>
                {props.children}
        </ProductContext.Provider>
    )
}
const  ProductConsumer = ProductContext.Consumer;
export {ProductProvider ,ProductConsumer}  

