import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Register.scss';
import './index.js';
import axios from 'axios';
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone   : '',
      password: ''
    };
    this.handleSubmit     = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleSubmit() {
	  if(this.state.phone==0 && this.state.password==0){
		  alert('请输入手机号和密码')
}else{
	window.location.href = "http://localhost:8080/#/login";
    console.log(this.state);
    var phone    = this.state.phone;
    var password = this.state.password;
    return axios({
      url   : 'http://localhost:3000/users/data',
      method: 'post',
      data  : {
        phone   : phone,
        password: password
      }
    }).then(res => {
	  console.log(res.data);
    });
  }
}
  handleTextChange(type, event) {
    console.log(event.target.value);
    this.setState({ [type]: event.target.value });
  }
  render() {
	  const {phone,password} = this.state
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h3 className="desc">欢迎注册</h3>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <form
              action = ""
              style  = {{ width: '400px', margin: 'auto', marginTop: '100px' }}
            >
              <div className="register-box">
                <label className="other_label">
                  <span>+86∨</span>
                  <input
                    className   = "phone"
                    type        = "text"
                    placeholder = "建议使用常用手机"
                    name        = "phone"
                    onChange    = {e => this.handleTextChange('phone', event)}
                  />
                </label>
                <div className="tips" />
              </div>
              <div className="register-box">
                <label className="other_label">
                  密 码: 
          <input
          className   = "password"
          type        = "password"
          placeholder = "请输入密码"
          name        = "password"
          onChange    = {e => this.handleTextChange('password', event)}
                  />
                </label>
                <div className="tips" />
              </div>
              <div className="register-box">
                <label className="other_label">
                  确 认 密 码: 
          <input
          className   = "repeat-password"
          type        = "password"
          placeholder = "请再次输入密码"
          name        = "confirmpassword"
          onChange    = {e => this.handleTextChange('password', event)}
                  />
                </label>
                <div className="tips" />
              </div>

              <div className="register-box">
                <label className="other_label">
                  验 证 码: 
                  <input type="text" placeholder="请输入验证码" className="code"/>
                </label>
                <span id="code" />
                <div className="tips" />
              </div>
              <div className="arguement">
                <input type="checkbox" id="xieyi" />
                阅读并同意
                <a href="#">《用户注册协议》</a>
                <a href="#">《隐私政策》</a>
                <div className="tips" />
              </div>
              <div className="submit_btn">
                <button
                  type    = "submit"
                  id      = "submit_btn"
                  onClick = {this.handleSubmit}
                >
                  立 即 注 册
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
