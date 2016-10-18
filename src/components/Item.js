import React from 'react';
import ReactDOM from 'react-dom';

const Item = ({item}) => (
  <div className='item-details'>
    <img id="thumbnail-image" className=".col-md-4" src={item.pic} />
    <div>{item.title}</div>
    <div>{item.description}</div>
  
  </div>
);      

export default Item;