import React, { Component } from 'react';
import './Appointment.css';
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import Axios from 'axios';

export default class Appointment extends Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.changeCode      = this.changeCode.bind(this);
    this.state           = {
      selectedDay: undefined,
      code       : '',
      radioValue : '',
      inputValue : '',
      docUser    : '',
      customer   : ''
    };
  }

  handerRadio = e => {
    this.setState({
      radioValue: e.target.value
    });
  };

  handerInput = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }

  handerSubmit = e => {
    // console.log(this.state.selectedDay.toLocaleDateString());
    // console.log(this.state.radioValue);
    //console.log(this.state.inputValue);
    e.preventDefault();
    //this.props.history.push('apposuccess/?cid=1');
  };

  componentWillMount(){
    //获取医生信息
    var docid = this.props.location.search.split('=')[1];
    Axios({
      url   : 'http://47.92.98.104:8080/jkwy/doctor',
      method: 'get',
      params: {
        did: docid
      }
    }).then(res=>{
      //console.log(res.data);
      this.setState({
        docUser: res.data
      })
    })
    //获取用户信息
  }

  componentDidMount() {
    this.changeCode();
  }

  changeCode() {
    var num       = 4;
    var ccode     = '';
    var codeChars = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ];
    for (var i = 0; i < num; i++) {
      var charNum  = Math.floor(Math.random() * 30);
          ccode   += codeChars[charNum];
    }
    this.setState({
      code: ccode
    });
  }

  render() {
    const { selectedDay }                       = this.state;
    const {dname,dimage,hospital,level,section} = this.state.docUser;
    return (
      <Form onSubmit={this.handerSubmit}>
        {/* 医生信息 */}
        <div className="commonMarginTop">
          <Container>
            <Row>
              <h3>医生信息</h3>
            </Row>
            <Row className="docContent commonContent" id="docInfoHead">
              <Col className="noPadding">
                <div id="headPhoto">
                  <img src={'http://47.92.98.104:8080' + dimage} />
                </div>
                <div id="headContent">
                  <h4>{dname}</h4>
                  <p>{section} {level}</p>
                  <p>{hospital}</p>
                </div>
              </Col>
              <Col className="noPadding">
                <div id="headRight">
                  <p>
                    门诊类型: <span id="outServerClass">{section}</span>
                  </p>
                  <p>
                    费用：<span id="cost">0.00元</span>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* 就诊时间 */}
        <Container style={{ marginTop: '62px' }}>
          <Row>
            <h3>就诊时间(必填)</h3>
          </Row>
        </Container>

        <Container style={{ border: '2px solid #999', paddingTop: '10px' }}>
          {selectedDay && <p>预约日期: {selectedDay.toLocaleDateString()}</p>}
          {!selectedDay && <p>请选择预约日期：</p>}
          <DayPickerInput onDayChange={this.handleDayChange} />
          <Row style={{ marginTop: '20px' }}>
            <div id="timeContent">
              请勾选具体时间段
              <FormGroup tag="fieldset" style={{ marginTop: '10px' }}>
                <div className="radio1" style={{ marginLeft: '1px' }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type     = "radio"
                        name     = "radio1"
                        value    = "09: 00-09: 30"
                        onChange = {e =>
                          this.handerRadio(editor - icon - align - middle)
                        }
                      />
                      09: 00-09: 30
                    </Label>
                  </FormGroup>
                </div>
                <div className="radio2">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type     = "radio"
                        name     = "radio1"
                        value    = "09: 30-10: 00"
                        onChange = {e => this.handerRadio(e)}
                      />
                      09: 30-10: 00
                    </Label>
                  </FormGroup>
                </div>
                <div className="radio3">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type     = "radio"
                        name     = "radio1"
                        value    = "10: 00-10: 30"
                        onChange = {e => this.handerRadio(e)}
                      />
                      10: 00-10: 30
                    </Label>
                  </FormGroup>
                </div>
                <div className="radio4">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type     = "radio"
                        name     = "radio1"
                        value    = "10: 30-11: 00"
                        onChange = {e => this.handerRadio(e)}
                      />
                      10: 30-11: 00
                    </Label>
                  </FormGroup>
                </div>
                <div className="radio5">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type     = "radio"
                        name     = "radio1"
                        value    = "11: 00-11: 30"
                        onChange = {e => this.handerRadio(e)}
                      />
                      11: 00-11: 30
                    </Label>
                  </FormGroup>
                </div>
              </FormGroup>
            </div>
          </Row>
        </Container>

        {/* 就诊人信息 */}
        <div className="commonMarginTop">
          <Container>
            <Row>
              <Col xs="2" className="noPadding">
                <h3>就诊人信息</h3>
              </Col>
            </Row>
            <Row className="commonContent" id="patientMan">
              朱佳杰 男 身份证 330************0315 1996-01-01 178**** 8073
            </Row>
          </Container>
        </div>

        {/* 医院预约规则 */}
        <div className="commonMarginTop">
          <Container>
            <Row>
              <h3>医院预约规则</h3>
            </Row>

            <Row className="commonContent" id="ruleContent">
              <div>
                1.为了方便患者就诊，我院开通了网上预约挂号服务。
                <br />
                2.网上预约挂号不收取手术费（诊疗费用以医院现场收取为准！）。
                <br />
                3.为保证您准时就诊，请于就诊当日按所预约时间段提前15分钟到门诊大厅取号。
              </div>
              <div>
                4.医生门诊资源有限，
                <span style={{ color: 'red' }}>
                  如预约成功后因故不能按时就诊，请务必于就诊日提前2小时取消预约
                </span>
                ，否则按违约处理，累计三次，您将无法进行
                <br />
                预约。
              </div>
              <div>
                5.如果您预约的专家临时请假，我们会通过短信或者电话告知，请注意网上专家门诊停诊通知或进行电话咨询。
              </div>
              <div>
                6.医生接诊速度受患者病情等诸多因素影响，实际就诊时间可能提前或推后，敬请知悉！
              </div>
            </Row>

            <Row className="haveChecked">
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" ref="ifChecked" />{' '}
                  我已认真了解此医院的预约规则
                </Label>
              </FormGroup>
            </Row>

            <Row className="rulePass">
              验证码{' '}
              <Input
                className = "authCode"
                ref       = "authCode"
                value     = {this.state.inputValue}
                onChange  = {e => this.handerInput(e)}
              />{' '}
              <div id="stateCode">{this.state.code}</div>
              <span onClick={this.changeCode}>看不清？换一张</span>
            </Row>

            <Row className="submitForm">
              <Button color="primary" className="submit" type="submit">
                提交订单
              </Button>
            </Row>
          </Container>
        </div>
      </Form>
    );
  }
}
