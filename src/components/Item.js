import React from 'react';
import ReactDOM from 'react-dom';

const Item = ({item}) => (
  <div className='item-details'>
    <div>{item.pic}</div>
    <div>{item.title}</div>
    <div>{item.description}</div>
  
  </div>
);      

export default Item;
