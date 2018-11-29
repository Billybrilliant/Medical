import React, { Component } from 'react';
import './Appointment.scss';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row
} from 'reactstrap';
import axios from 'axios';
export default class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    return axios({
      url   : 'http://localhost:3000/appoint/allData',
      method: 'post'
    }).then(res => {
      var data = res.data;
      for (var i in data) {
        $('#categoryOne').append(`<option value=i>${data[i].city}</option>`);
        $('#categoryTwo').append(
          `<option value=i>${data[i].hospital}</option>`
        );
        $('#categoryThree').append(
          `<option value=i>${data[i].office}</option>`
        );
        $('#categoryFour').append(`<option value=i>${data[i].doctor}</option>`);
      }
    });
    return (window.location.href = 'http://localhost:8080/#/');
  }
  componentWillMount() {
    this.handleSubmit();
  }
  // this.getSelect();
  // axios({
  //   url   : 'http://localhost:3000/people',
  //   method: 'get'
  // }).then(res=>{
  //   console.log(res);
  //   var data = res.data;
  //   for(var i in data){
  //     $('#categoryOne').append(`<option value=i>${data[i].name}</option>`);
  //     $('#categoryTwo').append(`<option value=i>${data[i].title}</option>`);
  //     $('#categoryThree').append(`<option value=i>${data[i].city}</option>`);
  //   }
  // })
  render() {
    return (
      <Container>
        <Row>
          <Col id="look_title">
            <h2 className="look_doc">" 轻松看名医 "</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="6" id="registration">
            <h4>快速预约挂号</h4>
            <p className="reg_instruct">
              百益健康小秘协助您查询各个预约挂号服务平台的号源信息，助您轻松预约挂号
            </p>
          </Col>
          <Col xs="6" className="appoint_reg">
            <Form id="appoint_form">
              <FormGroup row>
                <Label for="exampleSelect" className="choice_select">
                  选择地区
                </Label>
                <Col>
                  <Input
                    type      = "select"
                    name      = "select"
                    className = "exampleSelect"
                    id        = "categoryOne"
                  >
                    {/*  <option >杭州</option>
          <option>上海</option>
          <option>北京</option>
          <option>南京</option>
         <option>深圳</option>
          <option>{this.state.myText.city}</option> */}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelect" className="choice_select">
                  选择医院
                </Label>
                <Col>
                  <Input
                    type      = "select"
                    name      = "select"
                    className = "exampleSelect"
                    id        = "categoryTwo"
                  >
                    {/* <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>{this.state.myText.hospital}</option> */}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelect" className="choice_select">
                  选择科室
                </Label>
                <Col>
                  <Input
                    type      = "select"
                    name      = "select"
                    className = "exampleSelect"
                    id        = "categoryThree"
                  >
                    {/* <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>{this.state.myText.office}</option>*/}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelect" className="choice_select">
                  选择医生
                </Label>
                <Col>
                  <Input
                    type      = "select"
                    name      = "select"
                    className = "exampleSelect"
                    id        = "categoryFour"
                  >
                    {/*  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
 <option>5</option>
 <option>{this.state.myText.doctor}</option>*/}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }} id="submit">
                  <Button onClick={this.handleSubmit}>预约挂号</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="promise-item">
              <div className="promise-item-icon">
                <img src={require('../../../assets/images/1.png')} />
              </div>
              <a className="promise-item-title">100%免费预约挂号</a>
              <p className="content-one">
                真实填写预约挂号信息，免费预约挂号，三甲医院专家门诊
              </p>
            </div>
          </Col>
          <Col>
            <div className="promise-item">
              <div className="promise-item-icon">
                <img src={require('../../../assets/images/2.png')} />
              </div>
              <a className="promise-item-title">真正的专家门诊</a>
              <p className="content-one">
                提供预约挂号的医生均通过公立医院专家身份实名认证
              </p>
            </div>
          </Col>
          <Col>
            <div className="promise-item">
              <div className="promise-item-icon">
                <img src={require('../../../assets/images/3.png')} />
              </div>
              <a className="promise-item-title">实时查看可预约名额</a>
              <p className="content-one">
                业内首创预约排队可视化，可实时查看专家剩余可预约名额及当时排队人数
              </p>
            </div>
          </Col>
          <Col>
            <div className="promise-item">
              <div className="promise-item-icon">
                <img src={require('../../../assets/images/4.png')} />
              </div>
              <a className="promise-item-title">更专业、更贴心</a>
              <p className="content-one">
                专家的分诊团队逐层筛选审核，帮助医患精准匹配，节省患者盲目就医成本
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 3 }} className="medical_bot">
            <span className="copyright">
              Copyright©1998-2018 adtech all Rights Reserved
              百益健康资讯有限公司 版权所有 2018 浙ICp备11004654号-2
            </span>
            <br />
            <span>
              互联网医疗保健信息服务审核同意书 信息(2012) 59号
              增值电信业务经营许可证 B2-20070268
            </span>
          </Col>
        </Row>
      </Container>
    );
  }
}
