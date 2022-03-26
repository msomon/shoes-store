import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../Utilities/Fakedb';
import './Shop.css'

const Shop = () => {
const [products,setProduct]=useState([])
useEffect(()=>{
  fetch('product.json')
  .then(res=>res.json())
  .then(data=>setProduct(data))
},[]);

const [carts,setCarts]=useState([]);

const addTocart =(product)=>{
  // console.log(product.id);
 
  const newProduct = [...carts,product]
  setCarts(newProduct);
addToDb(product.id)
    
}

// console.log(carts);
  return (
    <div className='container'>
     <div className='shop-container'>
     {
        products.map(product=><Product product ={product} addToCart={addTocart} key={product.id}></Product>)
      }
     </div>
     <div className='cart-container'>
     <h1>Selected Shoes</h1>
     {
       carts.map(cart=><Cart carts={cart}></Cart>)
     }
     <div className='all-btn'>
     <button className='choose-btn'>Choose 1 For Me </button>
    <button className='again-btn'>Choose Again</button>
     </div>

     </div>
      
    </div>
  );
};

export default Shop;