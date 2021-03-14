import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import styled from "styled-components";

function Nav() {
    return (
       < NavWrapper>
       <div className = "Menu-bar">
            <Link to = "/"><Button>Home</Button></Link>
            <Link to = "/menu"> <Button >Menu</Button> </Link>
            <Link to = "/sign-in"> <Button >Sign In</Button> </Link>
            <Link to = "/sign-up"> <Button >Sign Up</Button> </Link>
            <Link to = "/my-bag"> <Button style={{ width :"40px",
    height :"30px", color: 'white' }} ><ShoppingCartOutlined style={{ fontSize: '20px', color: '#F8BD4' }} /></Button> </Link>
            
        </div>
        </NavWrapper>
    )
}
 const NavWrapper = styled.div`
 Menu-bar{
   
    direction: row;
    align-items: center;
    float:left;
    

 }`

export default Nav
