import React from 'react';

// import Inputbox from './components/Inputbox';
import Display from './Display.js';
import Nav from './Nav.js'



export default class App extends React.Component {

  constructor(props) {
  	super(props);
    this.state = {
      items: props.data
    }

  }

  getPics(query) {
    this.setState({
      items: items
    })
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
