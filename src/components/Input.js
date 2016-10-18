import React from 'react';
import ReactDOM from 'react-dom';

const Input = ({handleListInputChange}) => (
  <div className="input-bar">
    <span>
	  <input 
	    className="input-type-box"
	    placeholder="I want this..."
		type="text"
	    onChange={(e) => handleListInputChange(e.target.value)}
	  /></span>
     <span><button type="submit">Add to Wishlist</button></span>
  </div>
);      

export default Input;