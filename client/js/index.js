import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import RequiresAuth from './auth/RequireAuth';
import store from './store';
import Home from './components/Home';
import Flights from './components/Flights';
import Login from './components/Login';

const history = createHistory();

const routes = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/flights" component={RequiresAuth(Flights)} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </ConnectedRouter>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => ReactDOM.render(
      routes,
    document.getElementById('app')
  ));

console.log(`Client running in ${process.env.NODE_ENV} mode`);
