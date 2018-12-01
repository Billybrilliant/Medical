import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/index.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// applyMiddleware引入中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store            = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
