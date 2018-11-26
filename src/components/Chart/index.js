import React, { Component } from 'react';
import {Chart} from './component'
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
export default class Article extends Component {
  render() {
    return (
      <div>
        <Chart/>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
  <Router>
      <div>
      <Chart/>
      <Route path="/chart/:type" component={Chart} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
