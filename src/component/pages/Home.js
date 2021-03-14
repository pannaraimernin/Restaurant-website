import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from 'antd';
import { RightCircleTwoTone } from '@ant-design/icons';
import Nav from './Nav';
import styled from "styled-components";


function Home() {
    return (
        <HomeWrapper>
            <Nav/>
            <div className = 'home'>
                <div className = "show-title">
                <div className = "Title"> 
                <h1>Meet, Eat & Enjoy The True Taste</h1> 
                </div>
                
                <div className ="Explore"> 
                <Link to = "/menu">
    <Button className="Btn-menu" icon={<RightCircleTwoTone twoToneColor="#F4BA44" /> }>Explore Menu </Button> </Link> 
                </div>
                </div>
                
                
                <div className = "Title-image">
                    <img alt="" src = "https://cdn.pixabay.com/photo/2015/05/31/13/02/salad-791643_960_720.jpg" />
                    </div>
                    </div>
                    
               
                
    
</HomeWrapper>
     
    )
}
const HomeWrapper = styled.div`
.home{
    background-color:#FEF7E5;
    width: 1050px;
    border-radius: 25px;
    padding: 50px; 
    // margin-top: 20px;
    display:block;
    align-items: center;
    background-size: cover;
    margin: 25px 200px;

}
@media(min-width: 700px){
    .home{
       display:flex;
    }
     
}

.show-title{
    flex-direction: column;
    margin:auto;
    align-items: center;
    }
    @media(min-width: 700px){
        .show-title{
    
        }
         
    }
    .Title h1{
        color: Black;
        text-align: center;
        font-size:25px;
        font-weight:bold;
        font-family: 'Krona One', sans-serif;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        background-repeat: no-repeat;
     }
    @media(min-width: 700px) {
            .Title h1{
                color:black;
                font-size:50px;
                }}
        .Title-image img{
            align-items: center;
             margin-top: 20px;
              flex-direction: column; 
              border-radius : 50%;
              width :250px; 
              height : 150px;
              }
            @media(min-width: 700px) {
                .Title-image img {
                    width :500px; 
                    height : 400px;
                  
                }}
          .Explore{
            //   margin-right: 200px;
            //   grid-row-start: 2;
              // grid-row-end: 3;
            //   margin:auto;
            align-items: center;
          }
          

          
          .home .Explore .Btn-menu{
            border-radius: 20px;
            color: white;
            background-color:black;
            width: 240px;
            height: 80px;
            font-size: 20px;
            justify-Content: center;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            
          }
          .home  .Explore .Btn-menu:hover{
            cursor: pointer;
            width: 245px;
            height: 85px;
            background-color: #000000;
            color: white;
            border-color: white;
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 2;
            grid-row-end: 3;
            
        } 
          `

export default Home;
