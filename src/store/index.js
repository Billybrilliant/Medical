import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// applyMiddleware引入中间件
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
