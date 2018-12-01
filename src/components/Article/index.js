import React, { Component } from 'react';
import './index.scss';
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
  Container
} from 'reactstrap';

import { NavLink } from 'react-router-dom';
export default class Article extends Component {
  render() {
    return (
      <div>
        <Container className="articlKlass">
          <Row>
            <Col>
              <h4>专题分类</h4>
            </Col>
          </Row>
          <NavLink to="/home/article/food2">
            <Row style={{ marginTop: '80px' }}>
              <Col md="8" style={{ padding: 0 }}>
                <CardImg
                  top
                  width  = "100%"
                  height = "300px"
                  src    = {require('../../../assets/images/g1yqm8hu.jpg')}
                  alt    = "Card image cap"
                />
              </Col>
              <Col md="4" style={{ padding: 0 }}>
                <Card>
                  <CardBody style={{ height: '300px' }}>
                    <CardTitle>饮食健康指南</CardTitle>
                    <CardText>
                      你总是听别人说饮食健康的重要性，但是却不知道从何开始。如何通过健康饮食，改善健康状况，让你身体健壮，我们认真在研究。
                    </CardText>
                    <CardText>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </NavLink>
          <NavLink to="/home/article/yuerjing2">
            <Row style={{ marginTop: '80px' }}>
              <Col md="4" style={{ padding: 0 }}>
                <Card>
                  <CardBody style={{ height: '300px' }}>
                    <CardTitle>育儿经</CardTitle>
                    <CardText>
                      不必刻意观察，孩子就感受到我们太多的东西!不必刻意模仿，孩子就模仿了我们太多的态！
                      我们想怎样并不重要，孩子从我们的行为中看到了什么、学到了什么才重要！
                    </CardText>
                    <CardText />
                  </CardBody>
                </Card>
              </Col>
              <Col md="8" style={{ padding: 0 }}>
                <CardImg
                  top
                  width  = "100%"
                  height = "300px"
                  src    = {require('../../../assets/images/yuer.jpg')}
                  alt    = "Card image cap"
                />
              </Col>
            </Row>
          </NavLink>
          <NavLink to="/home/article/gaoxueyaDetail">
            <Row style={{ marginTop: '80px', marginBottom: '80px' }}>
              <Col md="8" style={{ padding: 0 }}>
                <CardImg
                  top
                  width  = "100%"
                  height = "300px"
                  src    = {require('../../../assets/images/xueya.jpg')}
                  alt    = "Card image cap"
                />
              </Col>
              <Col md="4" style={{ padding: 0 }}>
                <Card>
                  <CardBody style={{ height: '300px' }}>
                    <CardTitle>预防高血压</CardTitle>
                    <CardText>
                      高血压你有多了解？如何降低血压，我们更专业，有我更贴心！
                    </CardText>
                    <CardText>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </NavLink>
        </Container>
      </div>
    );
  }
}
