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
  Maincom
} from './components';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Maincom} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <div>
//         <Navigator />
//         <Switch>
//           <Route path="/" component={Home} exact />
//           <Route path="/appointment" component={Appointment} />
//           <Route path="/doctor" component={Doctor} />
//           <Route path="/article" component={Article} exact />
//           <Route path="/article/:ttopic" component={ArticleDetail} />
//           <Route path="/chart" component={Chart} />
//           <Route path="/medicine" component={Medicine} />
//         </Switch>
//         <Footer />
//       </div>
//     </Router>
//   </Provider>,
//   document.getElementById('app')
// );
