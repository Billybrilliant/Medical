import { combineReducers } from 'redux';
import hosreducer from './hosreducer';
import order from './order';
import chart from './chart';
export default combineReducers({
  hosreducer,
  order,
  chart
});
