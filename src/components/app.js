import React from 'react';

// import Inputbox from './components/Inputbox';
import Display from './Display.js';
// import Item from './Item.js'



export default class App extends React.Component {

  constructor(props) {
  	super(props);
    /*this.state = {
      item: props.data
    }*/

  }

  render() {

    return (
      <div>
	      <div className='header'>
	        <form className="urlInput">
	          <input placeholder="I want this..."></input>
	          <button type="submit">Add to Wishlist</button>
	          <button className="profile"> My Wishlist </button>
	          <button className="profile"> Friends </button>
	        </form>
	      </div>
        <span><Display items={this.props.data} /></span>
     </div>
    
    );
  }
}
