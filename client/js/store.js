import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducer from './reducer';

const logger = createLogger();
const history = createHistory();
const middleware = routerMiddleware(history);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    ...reducer,
    router: routerReducer
  }),
  composeEnhancers(
    applyMiddleware(middleware, logger)
  )
);
