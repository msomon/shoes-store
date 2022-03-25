import React from 'react';
import './Product.css'
const Product = ({product}) => {
const{id,name,img,price}=product 
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
      <h3>Name:{name}</h3>
      <h3>Price:${price}</h3>
      <button className='btn'>Add To Cart</button>
      </div>
      
    </div>
  );
};

export default Product;