import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Suggasition from '../Suggation/Suggasition';
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
  const newProduct = [...carts,product]
  setCarts(newProduct)
 
}

const [id,setId]=useState([])
const chooseOne =(numbers)=>{

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const number = numbers.length
  const selectOne = randomIntFromInterval(0,number)
const suggest = numbers[selectOne]

  setId(suggest)
}

const removeBtn = carts =>{
 
setCarts([])
}


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
       carts.map(cart=><Cart carts={cart} key={cart.id} ></Cart>)
     }
     <Suggasition id={id}></Suggasition>
     <div className='all-btn'>
     <button onClick={()=>chooseOne(carts)} className='choose-btn'>Choose 1 For Me </button>
    <button onClick={()=>removeBtn(carts)} className='again-btn'>Choose Again</button>
     </div>

     </div>  
    </div>
  );
};

export default Shop;