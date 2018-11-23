import Home from '../Home';
import Appointment from '../Appointment';
import Doctor from '../Doctor';
import Article from '../Article';
import ArticleDetail from '../ArticleDetail';
import Chart from '../Chart';
import Medicine from '../Medicine';
import Navigator from '../Navigator';
import Footer from '../Footer';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';
import React, { Component } from 'react';
export default class MainCOM extends Component {
  render() {
    // console.log(this.props.match.url);
    return (
      <div>
        <Navigator history={this.props.history} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/appointment" component={Appointment} />
          <Route path="/doctor" component={Doctor} />
          <Route path="/article" component={Article} exact />
          <Route path="/article/:ttopic" component={ArticleDetail} />
          <Route path="/chart" component={Chart} />
          <Route path="/medicine" component={Medicine} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
