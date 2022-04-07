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
},[products]);

const [carts,setCarts]=useState([]);

const addTocart =(products)=>{
  // console.log(products);
  const exist= carts.find(product=>product.id == products.id)
  if(!exist){
    // products.quantity = 1
    const newProduct = [...carts,products]
    setCarts(newProduct)
  }else{
    // const rest = carts.filter(product=>product.id== products.id)
    // products.quantity = products.quantity + 1
    // const newProduct = [...rest,products]

    // setCarts(newProduct)
    alert('no way to add')
    
  }
  
 
}

const removeToCart=products=>{
  const rest = carts.filter(product=>product.id !==products.id)
  setCarts(rest)
}


const [suggestProduct,setSuggestProduct]=useState({})
const chooseOne =(carts)=>{

 const random = Math.floor(Math.random()*carts.length)
  
const suggest =carts[random]

  setSuggestProduct(suggest)
}

const removeBtn = carts =>{
 
setCarts([])
setSuggestProduct([])
}
const [itemLength,setItemLength]=useState(false)
useEffect(()=>{
  if(carts.length >0){
    setItemLength(true)
  }else{
    setItemLength(false)
  }
} ,[carts])


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
       carts.map(cart=><Cart removeToCart={removeToCart} carts={cart} key={cart.id} ></Cart>)
     }
     
     <Suggasition cart={suggestProduct} carts={carts}></Suggasition>
     <div className='all-btn'>
     <button disabled={!itemLength} onClick={()=>chooseOne(carts)} className='choose-btn'>Choose 1 For Me </button>
     
    <button onClick={()=>removeBtn(carts)} className='again-btn'>Choose Again</button>
     </div>
     </div>
     
     {/* {carts.length ==4 ?<p>not adding more product </p>:<p>adding more product </p> } */}
     {/* {
       carts.length !==4 && <div>
         <h1>hlw all go </h1>
       </div>
     } */}
    </div>
  );
};

export default Shop;