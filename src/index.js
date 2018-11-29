import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import {
  Home,
  Navigator,
  Chart,
  Doctor,
  Medicine,
  Article,
  Appointment,
  Footer,
  ArticleDetail,
  Maincom,
  Register,
  Login
} from './components';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Maincom} />
          <Route path="/appointment" component={Appointment} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
