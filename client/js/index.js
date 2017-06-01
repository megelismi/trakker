import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from './store';
import Home from './components/Home';
import Flights from './components/Flights';
import Login from './components/Login';

const routes = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/flights" component={Flights} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => ReactDOM.render(
      routes,
    document.getElementById('app')
  ));

console.log(`Client running in ${process.env.NODE_ENV} mode`);
