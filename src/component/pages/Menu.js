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
                <div className = "container">
           
            <ProductConsumer>
                {value=>{
                    return value.products.map(product => {
                        return <Product key={product.id} product = {product}/>
                    })
                }}

            </ProductConsumer>
            </div>
            </div>
            
            

    </MenuWapper>
    )
}
const MenuWapper = styled.div`
.container{
    width:80%;
    background-color:#FEF7E5;
    background-position: bottom right;
    padding: 4rem 2rem;
    margin: 25px auto;
    display:grid;
    grid-template-columns: repeat(auto-fit,22rem);
    justify-content:center;
    grid-gap: 3rem;
    
  }
`
export default Menu;
