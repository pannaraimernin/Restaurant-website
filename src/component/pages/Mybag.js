import React from 'react'
import Cart from './Cart/cart';
import Nav from './Nav';

function Mybag() {
    return (
        <div style={{backgroundcolor: 'white' , backgroundsize: '100px'
        }}>
        <div>
           
             <Nav/>
            
        </div>
        <Cart/>
        </div>
    )
}

export default Mybag
