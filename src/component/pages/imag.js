import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import Cart from './Cart/cart';

function Imag() {
    return (
        <div style={{backgroundImage: 'url(images/mainBg.jpg)' , backgroundsize: '100px'
        }}>
        <div>
           
             <Link to = "/"> <Button>Home</Button> </Link>
            <Link to = "/menu"> <Button>Menu</Button> </Link>
            <Link to = "/sign-in"> <Button>Sign In</Button> </Link>
            <Link to = "/sign-up"> <Button>Sign Up</Button> </Link>
            <Link to = "/my-bag"> <Button style={{ width :"40px",
    height :"30px", color: 'white' }} ><ShoppingCartOutlined style={{ fontSize: '20px', color: '#F8BD4' }} /></Button> </Link>
            
        </div>
        <Cart/>
        </div>
    )
}

export default Imag
