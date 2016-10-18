import React from 'react';
import ReactDOM from 'react-dom';

import Item from './Item.js';


var Display = (props) => (
  <div id="display-items" className="row" >
    {
      props.items.map((item) => { 
        return (<span className="col-md-4"><Item key={item.title} item={item} /></span>);
      })
    }
  </div>
);


export default Display;
