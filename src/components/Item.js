import React from 'react';
import ReactDOM from 'react-dom';

const Item = ({item}) => (
  <div className='item-details'>
    <img className="thumbnail-image" src={item.pic} />
    <div>{item.title}</div>
    <div>{item.description}</div>
  
  </div>
);      

export default Item;