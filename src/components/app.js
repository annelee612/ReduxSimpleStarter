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

  }

  // getPics(url) {
  //   var newState = Object.assign({}, this.state);
  //   newState.items.push({url:'asdasd',title:query, description: 'an item'});
  //   //post request to input data
  //   // return $.ajax({
  //   //   type: "post",
  //   //   dataType: 'json',
  //   //   url: '/save'
  //   //   data: query,
  //   //   username: username
  //   // }).done(function(items){
  //   //   this.setState({ items: newState.items });
  //   // }.bind(this));

  //   //Picture.wishlistdb.insert({url: query});

  //    this.setState({
  //      items: newState.items
  //    });
  // }

  getPics(url) {
    console.log('input');
    console.log(url);
    $.ajax({
      type: "GET",
      dataType: 'json',
      url: '/',
      data: url
    }).done(function(response){
      console.log(response);
      //this.showPics(response);
    }.bind(this));

  }

  showPics(response) {
    var newState = Object.assign({}, this.state);
    newState.items.push({url:response});
  
    this.setState({
      items: newState.items
    });
  }

  render() {

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
