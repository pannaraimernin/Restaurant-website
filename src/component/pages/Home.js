import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from 'antd';
import { RightCircleTwoTone ,ShoppingCartOutlined} from '@ant-design/icons';



function Home() {
    return (
        <div className = "App">
            <Button>Home</Button>
            <Link to = "/menu"> <Button >Menu</Button> </Link>
            <Link to = "/sign-in"> <Button >Sign In</Button> </Link>
            <Link to = "/sign-up"> <Button >Sign Up</Button> </Link>
            <Link to = "/my-bag"> <Button style={{ width :"40px",
    height :"30px", color: 'white' }} ><ShoppingCartOutlined style={{ fontSize: '20px', color: '#F8BD4' }} /></Button> </Link>
            <div className = 'home'>
                <div> <h1>Eat & Enjoy the true taste</h1> </div>
                <div className ="Explore"> <Link to = "/menu">
    <Button className="Btn-menu" icon={<RightCircleTwoTone twoToneColor="#F4BA44" /> }>Explore Menu </Button> </Link> 
                </div>
                
                
                <div><img alt="image of cart" src = "https://cdn.pixabay.com/photo/2015/05/31/13/02/salad-791643_960_720.jpg"     /></div>
               
                
                </div>

        </div>
    )
}

export default Home;
