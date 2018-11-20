import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.scss';
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col md="2">
              <img
                src = {require('../../assets/images/logo/画板 1 副本.png')}
                id  = "logo_btm"
              />
            </Col>
            <Col className="btm-mid">
              <Row>
                <Col md={{ size: 4, offset: 2 }}>
                  <h5>
                    <img src={require('../../assets/images//电话 (1).png')} />
                    全国统一电话
                  </h5>
                  <p className="phone">4008-115-160</p>
                  <hr />
                  <p>周一至周五（8：30-21：00）</p>
                  <p>周六至周日（8：30-17：30）</p>
                </Col>
                <Col id="mid-mid" md={{ size: 2, offset: 1 }}>
                  <h5>关于我们</h5>
                  <p>注册协议</p>
                  <p>免责条款</p>
                  <p>联系我们</p>
                </Col>
                <Col md={{ size: 2, offset: 1 }}>
                  <h5>用户服务</h5>
                  <p>帮助中心</p>
                  <p>意见反馈</p>
                  <p>黄牛举报</p>
                </Col>
              </Row>
            </Col>
            <Col md="2" className="btm-right">
              <h5>分享到</h5>
              <p>
                <a href="#">
                  <img src={require('../../assets/images/微博.png')} />
                </a>
                <a href="#">
                  <img src={require('../../assets/images/群蜂QQ空间.png')} />
                </a>
                <a href="#">
                  <img src={require('../../assets/images/微信.png')} />
                </a>
              </p>
            </Col>
          </Row>
        </Container>
        <hr />
        <div className="btm-btm">
          <p>
            Copyright&copy;1998-2018 adtech all Rights Reserved
            &nbsp;&nbsp;&nbsp;&nbsp;健康无忧医疗咨询有限公司&nbsp;&nbsp;&nbsp;&nbsp;版权所有&nbsp;&nbsp;&nbsp;&nbsp;2018&nbsp;&nbsp;&nbsp;&nbsp;浙Cp备11004654号-2
          </p>
          <p>
            互联网医疗保健信息服务审核同意书&nbsp;&nbsp;信息(2012)59号
            &nbsp;&nbsp;&nbsp;&nbsp;增值电信业务经营许可证 B2-20070268
          </p>
        </div>
      </div>
    );
  }
}
