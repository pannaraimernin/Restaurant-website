import React from 'react'
import {DeleteOutlined}  from '@ant-design/icons';
import styled from "styled-components"

function CartItem({item,value}) {
    const {id,title,img,price,total,count} = item;
    const {increment , decrement,removeItem} = value;

    return (
        <ItemWrapper>
        <div className = "container">
            <div className= "Product">
                <img alt=""
            src={img} style={{width : '100px' , height : '100px'}}/>
            </div>
            <div className = "Product-name">
               {title}
            </div>
            <div className = "price">
               {price}
            </div>
            <div className = "Quantity-product">
                <span> <button onClick = {()=> decrement(id)}>  - </button> </span>
           
                <span> <button>{count}</button> </span>
            
                <span> <button onClick = {()=> increment(id)}>
                       + </button> </span>
            </div>
            <div className = "Product-total">
                <strong> Item Total : $ {total}</strong>
            </div>
            
            <div  classsName = "Remove-product"onClick = {()=>{removeItem(id)}}>
                <DeleteOutlined style={{ fontSize: '16px', color: '#08c' }}/>
            </div>

            
        </div>
        </ItemWrapper>
    )
}
const ItemWrapper = styled.div`
.container{
    display: grid;
    margin-bottom: 10px;
    margin-top:10px;
   

}
.Product{
    grid-column: 1;
    grid-row: 1;
}
.Product-name{
    grid-column: 2;
    grid-row: 1;
    text-align: center;
}
.price{
    grid-column: 3;
    grid-row: 1;
    text-align: justify:
}
.Quantity-product{
    grid-column: 4;
    grid-row: 1;
    text-align: center;
}
.Remove-product{
    grid-column: 5;
    grid-row: 1;
    text-align: center;
}
.Product-total{
    grid-column: 6;
    grid-row: 1;
    text-align: right:
   
    
}
.Quantity-product button{
    background-color: #000000;
    padding: 0px;
    width:20px;
    position:center;
    
   
}`


export default CartItem
