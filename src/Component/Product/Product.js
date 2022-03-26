import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
  // console.log(props);
const {product,addToCart}=props ;
const{name,img,price}= product ;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
      <h3>Shoes Name:{name}</h3>
      <h3>Price:${price}</h3>
      <button onClick={()=>addToCart(product)} className='btn'><p className='btn-text'>Add To Cart</p> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
      </div>
      
    </div>
  );
};

export default Product;