import React from 'react';
import './Suggasition.css'

const Suggasition = (props) => {
  const {id}= props ;
  return (
    <div className='suggest'>
      <img className='img' src={id.img} alt="" />
     <h3>Suggetion:{id.name}</h3>
    </div>
  );
};

export default Suggasition;