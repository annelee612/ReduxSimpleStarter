import React from 'react';
import ReactDOM from 'react-dom';

import Item from './Item.js'

export default class Display extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	var items = this.props.data.map(function(item){
  	  return (
  	  	<Item pic={item.pic} title={item.title} 
  	  	descsription={item.description}></Item>
  	  );
  	});
  	return (
  		<div className='display'>
  		  {items}
  	  </div>
  	);
  }
}

