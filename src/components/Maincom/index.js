import Home from '../Home';
import Appointment from '../Appointment';
import Doctor from '../Doctor';
import Article from '../Article';
import ArticleDetail from '../ArticleDetail';
import ArticleTopic from '../ArticleTopic';
import Chart from '../Chart';
import Medicine from '../Medicine';
import Navigator from '../Navigator';
import Footer from '../Footer';

import Introduce from '../Introduce';
import IntroduceD from '../IntroduceD';
import liuyan from '../liuyan';
import Question from '../Question';
import Yuyueliuchen from '../Yuyueliuchen';
import MDetails from '../MDetails/Details';
import AppoSuccess from '../Appointment/AppoSucess';
import Personal from '../Personal';

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
          <Route path="/home/article" component={Article} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/home/doctor" component={Doctor} />
          <Route path="/home/article/:ttopic" component={ArticleTopic} exact />
          <Route path="/home/article/:ttopic/:cid" component={ArticleDetail} />
          <Route path="/home/chart" component={Chart} />
          <Route path="/home/liuyan" component={liuyan} />
          <Route path="/home/introduce" component={Introduce} />
          <Route path="/home/introduced" component={IntroduceD} exact />
          <Route path="/home/introduced/question" component={Question} />
          <Route path="/home/medicine" component={Medicine} exact />
          <Route path="/home/medicine/:id" component={MDetails} />
          <Route path="/home/yuyueliuchen" component={Yuyueliuchen} />
          <Route path="/home/apposuccess" component={AppoSuccess}  exact />
          {/* <Route path="/home/apposuccess/:id" component={AppoSuccess} /> */}
          <Route path="/home/personal" component={Personal} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
