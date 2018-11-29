import React, { Component } from 'react';
import { Button, Row, Grid, Col } from 'react-bootstrap';
import './Doctor.css';
export default class Doctor extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoading: false
    };
  }
  handleClick() {
    this.setState({ isLoading: true });

    // This probably where you would have an `ajax` call
    setTimeout(() => {
      // Completed of async action, set loading state back
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="doctor">
        <Grid className="main">
          <Row className="show-grid header">
            <Col md={6} mdPush={6}>
              <Row className="show-grid">
                <Col xs={6} xsOffset={6} className="button-b">
                  <Button
                    className = "button-style-yello button-style"
                    // bsStyle="primary"
                    disabled = {isLoading}
                    onClick  = {!isLoading ? this.handleClick : null}
                  >
                    {isLoading ? 'Loading...' : '换一批'}
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col md={6} mdPull={6}>
              <Col md={6} sm={6}>
                <img className="logo-doctor" src={require('../../../assets/images/医生查询图标/图层 1@1,25x.png')} />
              </Col>
              <Col md={6} sm={6} className="title">
                <h3>按疾病推荐</h3>
                <span>生病去那家医院看</span>
              </Col>
            </Col>
          </Row>

          <Row className="show-grid main-row">
            <Col xs={6} md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-yello">
                <li className="yello">
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-yello">
                <li>
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
            <Col xsHidden md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-yello">
                <li>
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="show-grid main-row">
            <Col xs={6} md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-yello">
                <li>
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-yello">
                <li>
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
            <Col xsHidden md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-yello">
                <li>
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
        {/* 按照科室查询 */}
        <Grid className="main">
          <Row className="show-grid header">
            <Col md={6} mdPush={6}>
              <Row className="show-grid">
                <Col xs={6} xsOffset={6} className="button-b">
                  <Button
                    className = "button-style button-style-red"
                    // bsStyle="primary"
                    disabled = {isLoading}
                    onClick  = {!isLoading ? this.handleClick : null}
                  >
                    {isLoading ? 'Loading...' : '换一批'}
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col md={6} mdPull={6}>
              <Col md={6} sm={6}>
                <img
                  className = "logo-doctor"
                  src       = {require('../../../assets/images/医生查询图标/图层 2@1,25x.png')}
                />
              </Col>
              <Col md={6} sm={6} className="title">
                <h3>按科室查询</h3>
                <span>科室综合实力排行榜</span>
              </Col>
            </Col>
          </Row>

          <Row className="show-grid main-row">
            <Col xs={6} md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-red">
                <li className="red">
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-red">
                <li>
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
            <Col xsHidden md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-red">
                <li>
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="show-grid main-row">
            <Col xs={6} md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-red">
                <li>
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-red">
                <li>
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
            <Col xsHidden md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-red">
                <li>
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
        {/* 按照地区查询 */}
        <Grid className="main">
          <Row className="show-grid header">
            <Col md={6} mdPush={6}>
              <Row className="show-grid">
                <Col xs={6} xsOffset={6} className="button-b">
                  <Button
                    className = "button-style button-style-blue"
                    // bsStyle="primary"
                    disabled = {isLoading}
                    onClick  = {!isLoading ? this.handleClick : null}
                  >
                    {isLoading ? 'Loading...' : '换一批'}
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col md={6} mdPull={6}>
              <Col md={6} sm={6}>
                <img
                  className = "logo-doctor"
                  src       = {require('../../../assets/images/医生查询图标/图层 3@1,25x.png')}
                />
              </Col>
              <Col md={6} sm={6} className="title">
                <h3>按地区查询</h3>
                <span>全面的全国医院数据</span>
              </Col>
            </Col>
          </Row>

          <Row className="show-grid main-row">
            <Col xs={6} md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-blue">
                <li className="blue">
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-blue">
                <li>
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
            <Col xsHidden md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-blue">
                <li>
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="show-grid main-row">
            <Col xs={6} md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-blue">
                <li>
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-blue">
                <li>
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
            <Col xsHidden md={4}>
              <h4>
                <a href="#">病毒性肝炎></a>
              </h4>
              <ul className="ul-blue">
                <li>
                  <a href="#">复旦大学附属医院</a>
                </li>
                <li>
                  <a href="#">首都医科大附属地坛医院</a>
                </li>
                <li>
                  <a href="#">上海交通大学附属瑞金医院</a>
                </li>
                <li>
                  <a href="#">中山大学附属第三医院</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
