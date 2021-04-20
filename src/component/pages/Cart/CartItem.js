import React from 'react'
import {DeleteOutlined}  from '@ant-design/icons';

function CartItem({item,value}) {
    const {id,title,img,price,total,count} = item;
    const {increment , decrement,removeItem} = value;

    return (
       
        <table className="table1">
 
  <tr>
<td>
    <img alt=""
            src={img} style={{width : '100px' , height : '100px'}}/>
</td>
    <td><strong>{title}</strong></td>
    <td>{price}</td>
    <td><span><button onClick = {()=> decrement(id)} style={{width: '20px'}}>  - </button></span> <span> <button style={{width: '30px'}}>{count}</button> </span><span><button onClick = {()=> increment(id)} style={{width: '20px'}}>+ </button></span></td>
   
    <td onClick = {()=>{removeItem(id)}}> <DeleteOutlined style={{ fontSize: '20px', color: '#08c'}}/></td>
    <td> <strong> Item Total : $ {total}</strong></td>
  </tr>
 
</table>
    
    )
}

export default CartItem
