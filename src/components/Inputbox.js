import React, { Component } from 'react';


export class Inputbox extends React.Component {
  // constructor(props) {
  // 	super(props);
  // 	this.state = {
  // 	  value: ''
  // 	};
  // }

  render() {
  	return (
      <div className="urlInput">
        <div className="header">
          <form>
            <input placeholder="I want this...">
            </input>
            <button type="submit">Add to Wishlist</button>
          </form>
        </div>
      </div>
    );
  }
}

  