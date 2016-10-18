import React from 'react';

import Display from './Display.js';
import Nav from './Nav.js';



export default class App extends React.Component {

  constructor(props) {
  	super(props);
    this.state = {
      items: props.data,
    }

  }

  getPics(query, username) {
    var newState = Object.assign({}, this.state);
    newState.items.push({url:'asdasd',title:query, description: 'an item'});
    //post request to input data
    // return $.ajax({
    //   type: "post",
    //   dataType: 'json',
    //   url: query,
    //   username: username
    // }).done(function(result){
    //   this.setState({ data: result });
    // }.bind(this));

    //Picture.wishlistdb.insert({url: query});

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
