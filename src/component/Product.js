import React from 'react'
import { ProductConsumer } from "../context";
import { Link } from 'react-router-dom';
import styled from "styled-components"
import {ShoppingCartOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';

export default function Product(props) {
    const { id, title, img, price, inCart } = props.product;

    
    return (
     <ProductWrapper >
        <div className="card">
          <ProductConsumer>
            {(value) =>
              (
            <div className = "img-container" onClick = {()=>console.log('you clicked me on the image')}>
                <Link to = "/my-bag">
                    <img src={img}  alt="" className="card-img-top" />
                </Link>
                
                 <button className="cart-btn"
                    disabled = {inCart?true:false} 
                    onClick = {() => value.addToCart(id)}>
                        {inCart? (
                            <p disabled> In cart</p>
                        ) :(
                            <ShoppingCartOutlined />
                        )} 
                </button>
             </div> 
              )
    }
                   </ProductConsumer>
                   {/* card footer */}
                   <div className="card-footer">
            <p className="food-title">{title}</p>
            <h5 className="item-price">
              <span className = "price">$</span>
              {price}
            </h5>
          </div>   
        </div>
        
          
     </ProductWrapper>
        
    )
}

Product.propTypes = {
  product:PropTypes.shape({
    id : PropTypes.number,
    img : PropTypes.string,
    title : PropTypes.string,
    price : PropTypes.number,
    inCart : PropTypes.bool
  }).isRequired
}

 const ProductWrapper = styled.div`
.card {
  background-color : white;
    border-color: transparent;
    transition: all 1s linear;
    display:grid;
    text-align:center;
    position:relative;
  grid-template-areas: 
    "header header header header"
    "main main main main"
    "footer footer footer footer";
    border-radius: 25px;
    witdth:10px;
    box-sizing: border-box;
   
  }
  .card-footer {
     background: transparent;
      border-top: transparent;
    transition: all 1s linear;
    grid-area: footer;

  }
  .food-title{
    font-size: 20px;
    grid-area: main;
   

  
  }
  .item-price{
    margin-bottom :20px;
    grid-area: footer;
  }


  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .card-img-top {
    transition: all 1s linear;
    align-items: center;
  }
  .img-container {
    position: relative;
    align-items: center;
     overflow: hidden;
     grid-area: header;
     margin: auto;
     margin-top:20px;
     width:200px;
     hight:300px;
  }
  .cart-btn{
    background-color:#F0714A;
    padding: 0.2rem 0.4rem;
    border-radius: 0.5rem 0 0 0;
    border: none;
    bottom: 0;
    right: 0;
    font-size: 1.4rem;
    transform: translate(100%, 100%);
    transition: all 1s ease-in-out;
    position: absolute;
    bottom: 0;
    right: 0;
    text-align : center;
  
    

    
}
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .card-img-top {
    transition: all 1s linear;
    width : 150px;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  
.basket-added {
    width :40px;
    height :30px;

}
 .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
