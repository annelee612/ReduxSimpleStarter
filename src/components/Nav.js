import React from 'react';
import ReactDOM from 'react-dom';

import Input from './Input.js';

var Nav = ({handleListInputChange}) => (
  <form className="input">
    <div className="col-md-6 col-md-offset-3">
      <Input handleListInputChange={handleListInputChange}/>
    </div>
  </form>
);


export default Nav;