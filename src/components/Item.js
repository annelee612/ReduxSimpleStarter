import React from 'react';
import ReactDOM from 'react-dom';

export default class Item extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <div className='item'>
  	    <div>{this.props.item.pic}</div>
  	    <div>{this.props.item.title}</div>
  	    <div>{this.props.item.description}</div>
  	  </div>
  	)	
  }
}


