import React from 'react';
// import express from "express";

import $ from 'jquery';
import jQuery from 'jquery';

import Display from './Display.js';
import Nav from './Nav.js';



export default class App extends React.Component {

  constructor(props) {
  	super(props);
    this.state = {
      items: props.data,
    }
    console.log(this.state.items, 'this state items');
  }
 //this is the function to use for no backend
  getPics(query) {
    var newState = Object.assign({}, this.state);
    newState.items.push({pic:query});
    this.setState({
      items: newState.items
    });
  }

  // getPics(url) {
  //   console.log(url);
  //   $.ajax({
  //     type: "GET",
  //     dataType: 'text',
  //     url: '/',
  //     data: url
  //   }).done(function(response){
  //     console.log(response, 'finished request');
  //     //this.showPics(response);
  //   }.bind(this));
  // }
  

  showPics(response) {
    var newState = Object.assign({}, this.state);
    newState.items.push({url:response});
  
    this.setState({
      items: newState.items
    });
  }

  handleClick() {
    this.props.history.pushState(null, '/friends');
  }

  render() {
    console.log(this.state.items);

    return (
      <div>
	      <div className='header'> <div className='title'>Wishlist</div>
            <Nav handleListInputChange={this.getPics.bind(this)}/>
	          <button className="profile-but"> My Wishlist </button>
	          <button className="profile-but"> Friends </button>
	      </div>
        <Display items={this.state.items} />
     </div>
    
    );
  }
}
