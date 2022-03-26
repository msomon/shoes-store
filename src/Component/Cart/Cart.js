// import { faHourglass3 } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'

const Cart = ({carts,id}) => {

  return (
   
    <div className='cart'>
      
      <img className='image' src={carts.img} alt="" />
        <h3>Name:{carts.name.slice(0,10)}</h3>
        

    </div>
  );
};

export default Cart;