import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from 'antd';
import { ProductConsumer, ProductProvider } from '../../context';

import Product from "../Product";
import {ShoppingCartOutlined } from '@ant-design/icons';



function Menu(props) {
   
 
  
    return (
        <div> 
          
            
            <Link to = "/"> <Button>Home</Button> </Link>
           <Button>Menu</Button> 
            
            <Link to = "/sign-in"> <Button>Sign In</Button> </Link>
            <Link to = "/sign-up"> <Button>Sign Up</Button> </Link>
           
            <Link to = "/my-bag"> <Button style={{ width :"40px",
    height :"30px", color: 'white' }} ><ShoppingCartOutlined style={{ fontSize: '20px', color: '#F8BD4' }} /></Button>
            </Link>
            <div className ='Menu'>
           
            <ProductConsumer>
                {value=>{
                    return value.products.map(product => {
                        return <Product key={product.id} product = {product}/>
                    })
                }}

            </ProductConsumer>
            </div>
            
            
        </div>
    )
}

export default Menu;
