import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import RequiresAuth from './auth/RequireAuth';
// import RememberUser from './auth/RememberUser';
import store from './store';
import HomePagePicture from './components/HomePagePicture';
// import HomePageVideo from './components/HomePageVideo';
import FlightsPage from './components/FlightsPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

// const history = createHistory();

const routes = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={HomePagePicture} />
        <Route path="/flights" component={RequiresAuth(FlightsPage)} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    </Router>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => ReactDOM.render(
      routes,
    document.getElementById('app')
  ));

console.log(`Client running in ${process.env.NODE_ENV} mode`);
