import React from 'react';

// import Inputbox from './components/Inputbox';
import Display from './Display.js';
// import Item from './Item.js'



export default class App extends React.Component {

  constructor(props) {
  	super(props);
    /*console.log(props.data);
    this.state = {
      item: props.data
    }
    console.log(this.state.item[0].pic);*/

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
