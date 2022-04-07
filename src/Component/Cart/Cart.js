// import { faHourglass3 } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = ({carts,removeToCart}) => {

  return (
   
    <div className='cart'>
      <img className='image' src={carts.img} alt="" />
        <h3>Name:{carts.name.slice(0,10)}</h3>
        <button className='removeBtn' onClick={()=>removeToCart(carts)}><small><FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon> </small></button>
       
        
        
        
    </div>
  );
};

export default Cart;