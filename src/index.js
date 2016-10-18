import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';




// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <App data={window.data}/>,
    document.querySelector('.container')
);
