// import { faHourglass3 } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Cart = ({carts}) => {
  
console.log(carts);
  return (
    <div className='cart'>
      
        <h3>Name:{carts.name.slice(0,10)}</h3>
    </div>
  );
};

export default Cart;