import React from 'react';
import './Suggasition.css'

const Suggasition = ({cart}) => {
  // console.log(cart.name);
  
  return (
   <div className='suggest'>
   <img className='img' src={cart.img} alt="" />
  <h3>Suggetion:{cart.name}</h3>
 </div>
     

    )

 
};

export default Suggasition;