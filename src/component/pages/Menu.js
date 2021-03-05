import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from 'antd';
import { ProductConsumer } from '../../context';

import Product from "../Product";
import {ShoppingCartOutlined } from '@ant-design/icons';
import Nav from './Nav';
import styled from 'styled-components';



function Menu(props) {
   return (
       <MenuWapper>
           <Nav/>
            <div className ='Menu'>
           
            <ProductConsumer>
                {value=>{
                    return value.products.map(product => {
                        return <Product key={product.id} product = {product}/>
                    })
                }}

            </ProductConsumer>
            </div>
            
            

    </MenuWapper>
    )
}
const MenuWapper = styled.div`
.Menu{
    background-color:#FEF7E5;
    width: 1050px;
    border-radius: 25px;
    padding: 50px; 
    margin-top: 20px;
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    align-items: center;
    grid-gap: 1rem;
   


   
}

`
export default Menu;
