import React, { useEffect,useState} from 'react';
import { storeProducts} from './data';
import {Button} from 'antd';

const ProductContext = React.createContext();
 
function ProductProvider(props) {
    const [products,setProducts] =  useState([])
    const [cart,setCart] = useState([])
    const[cartSubTotal,setCartSubTotal] = useState(0)
    const[cartTotal,setCartTotal] = useState()
    const[cartTax,setCartax] = useState(0)
  

    useEffect(()=>{
     setData()},[])
    
    useEffect(()=> { const addTotal = ()=>{
        let subTotal = 0; 
        cart.map(item => (subTotal += item.total))
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax;
        setCartSubTotal(subTotal)
        setCartax(tax)
        setCartTotal(total)} 
        addTotal()},[products,cart]);
    
    const setData = ()=>{
        let tempProducts = [];
        storeProducts.forEach( item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem]; 
            //array of object
            
        });
        setProducts(tempProducts)
    }


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

    const increment =(id)=>{
            let tempCart = [...cart]
            const selectProduct = tempCart.find( item=> item.id === id)
            const index = tempCart.indexOf(selectProduct) 
            const product = tempCart[index]
            
            product.count = product.count + 1;
            product.total = product.count * product.price;
            setCart([...tempCart])


          }
    const decrement =(id)=>{
            let tempCart = [...cart]
            const selectProduct = tempCart.find( item=> item.id === id)
            const index = tempCart.indexOf(selectProduct) 
            const product = tempCart[index]
            
            product.count = product.count - 1;
            if(product.count === 0 )
            {return removeItem(id)}
            else{ product.total = product.count * product.price;}

           setCart([...tempCart])

        }
    const removeItem =(id)=>{
            let tempProducts = [...products]
            let tempCart = [...cart]
            tempCart = tempCart.filter(item => item.id !==id)

            const index = tempProducts.indexOf(getItem(id));
            let removeProduct = tempProducts[index]
            removeProduct.inCart = false;
            removeProduct.count = 0;
            removeProduct.total = 0;
            setCart([...tempCart])
            setProducts([...tempProducts])

             
        }
       
    const clearCart = ()=>{
            setCart([])
        }

        // }
        // const testMe = ()=>{
        //     console.log("state product:" ,products[0].inCart)
        //     console.log("store product:" ,storeProducts[0].inCart)
        //     const tempProducts = [...products]
        //     tempProducts[0].inCart = true
        //     setProducts(tempProducts)
        //     console.log("state product:" ,products[0].inCart)
        //     console.log("store product:" ,storeProducts[0].inCart)
        // }

        

    return (
        <ProductContext.Provider 
               
        value = {{
            products :products,
            addToCart :addToCart,
            getItem : getItem,
            cart:cart,
            cartSubTotal : cartSubTotal,
            cartTotal : cartTotal,
            cartTax :cartTax,
            increment:increment ,
            decrement : decrement ,
            removeItem : removeItem ,
            clearCart : clearCart

}}> 
    {/* <button onClick = {testMe}> test Me </button> */}
    <Button></Button>
            {props.children}
        </ProductContext.Provider>
    )
}
const  ProductConsumer = ProductContext.Consumer;
export {ProductProvider ,ProductConsumer}  

