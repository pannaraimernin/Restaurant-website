import React from 'react'
import {DeleteOutlined}  from '@ant-design/icons';

function CartItem({item,value}) {
    const {id,title,img,price,total,count} = item;
    const {increment , decrement,removeItem} = value;

    return (
        <div>
            <div>
                <img 
            src={img} style={{width : '100px' , height : '100px'}}/>
            </div>
            <div>
               <span>Product : </span>{title}
            </div>
            <div>
                <span>Price: </span>{price}
            </div>
            <div>
                <span> <button onClick = {()=> decrement(id)}>  - </button> </span>
           
                <span> <button>{count}</button> </span>
            
                <span> <button onClick = {()=> increment(id)}>
                       + </button> </span>
            </div>
            <div >
                <strong> Item Total : $ {total}</strong>
            </div>
            
            <div onClick = {()=>{removeItem(id)}}>
                <DeleteOutlined style={{ fontSize: '16px', color: '#08c' }}/>
            </div>

            
        </div>
    )
}

export default CartItem
