import React from 'react'

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
            
        </div>
    )
}

export default CartItem
