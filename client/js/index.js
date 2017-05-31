import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import Home from './components/Home.js';


document.addEventListener('DOMContentLoaded', () => ReactDOM.render(
      <Home />,
    document.getElementById('app')
  ));

console.log(`Client running in ${process.env.NODE_ENV} mode`);
