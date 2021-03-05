import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import Cart from './Cart/cart';
import Nav from './Nav';

function Imag() {
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

export default Imag
