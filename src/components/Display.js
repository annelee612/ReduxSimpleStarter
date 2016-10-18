import React from 'react';
import ReactDOM from 'react-dom';

import Item from './Item.js';


var Display = (props) => (
  <span className="display-items">
    {
      props.items.map((item) => { 
      return (<Item key={item.title} item={item} />);
      })
    }
  </span>
);


export default Display;
