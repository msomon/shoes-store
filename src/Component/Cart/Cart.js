import React from 'react';

const Cart = ({carts}) => {
  
    for(const cart in carts){
console.log(cart);
    }
    
  return (
    <div>
      <h2>Selected Shoes</h2>
      
    </div>
  );
};

export default Cart;