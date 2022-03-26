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

console.log(carts);
  return (
    <div className='container'>
     <div className='shop-container'>
     {
        products.map(product=><Product product ={product} addToCart={addTocart} key={product.id}></Product>)
      }
     </div>
     <div className='cart-container'>
     <h2>Cart Product </h2>
     {
       carts.map(cart=><Cart carts={cart} key={cart.id}> </Cart>
       )
     }

     </div>
      
    </div>
  );
};

export default Shop;