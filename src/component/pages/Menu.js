import React from 'react'
import { ProductConsumer } from '../../context';
import Product from "../Product";
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
    // width: 1050px;
    padding: 4rem 2rem;
    margin-top: 20px;
    display:grid;
    grid-template-columns: repeat(auto-fit,22rem);
    justify-content:center;
    grid-gap: 3rem;
    
  }

`
export default Menu;
