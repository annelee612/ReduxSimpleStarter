import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';


ReactDOM.render(
    <App data={window.data}/>,
    document.querySelector('.container')
);
