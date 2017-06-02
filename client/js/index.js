import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import RequiresAuth from './auth/RequireAuth';
import store from './store';
import HomePage from './components/HomePage';
import Flights from './components/FlightsPage';
import LoginBox from './components/LoginBox';

const history = createHistory();

const routes = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/flights" component={RequiresAuth(Flights)} />
        <Route path="/login" component={LoginBox} />
      </div>
    </Router>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => ReactDOM.render(
      routes,
    document.getElementById('app')
  ));

console.log(`Client running in ${process.env.NODE_ENV} mode`);
