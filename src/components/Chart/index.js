import React, { Component } from 'react';
import {Chart} from './component'
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
export default class Article extends Component {
  // componentDidMount() {
  //   var a = this.props.location.pathname.split('/')[3]

  // }
  constructor(props){
    super(props)
    this.state={
      message: this.props.location.pathname.split('/')[3]
    }
    console.log(this.props.location.pathname.split('/')[3])
  }
  render() {
    return (
      <div>
        <Chart msg={this.state.message}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
  <Router>
      <div>
      <Chart/>
      <Route path="/chart" component={Chart} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
