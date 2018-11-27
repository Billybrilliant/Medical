import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { User, Object1, Gua } from './contents/index';
import './Medicine.css';
//import {User,Object1,Gua} from './contents/index';
import { Container, Row, Col } from 'reactstrap';
export default class Medicine extends Component {
  render() {
    return (
      <Container className="content">
        <Row className="middle">
          <Col xs="3" className="left">
            <Row className="top">
              <Col>
                <ul>
                  <li>
                    <img src={require('../../../assets/images/img/2.png')} />
                    <p>已认证</p>
                  </li>
                  <li>
                    <img src={require('../../../assets/images/img/3.png')} />
                    <p>未绑定</p>
                  </li>
                  <li>
                    <img src={require('../../../assets/images/img/4.png')} />
                    <p>未绑定</p>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="bottom">
              <Col>
                <h4>个人中心</h4>
                <ul>
                  <li>
                    <Link to="/home/personal/user">用户认证</Link>
                  </li>
                  <li>
                    <Link to="/home/personal/gua">我的挂号</Link>
                  </li>
                  <li>
                    <Link to="/home/personal/object1">个人资料</Link>
                  </li>
                  <li>
                    <Link to="/home/chart">发表言论</Link>
                  </li>
                  <li>
                    <Link to="/home/article">查看文章</Link>
                  </li>
                  <li>
                    <Link to="/appointment">预约挂号</Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xs="8" className="right">
            <Switch>
              <Route path="/home/personal/user" component={User} />
              <Route path="/home/personal/gua" component={Gua} />
              <Route path="/home/personal/object1" component={Object1} />
            </Switch>
          </Col>
        </Row>
      </Container>
    );
  }
}
