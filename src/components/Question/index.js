import React, { Component } from 'react';
import './questions.css';
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  NavLink
} from 'reactstrap';
import FileInputComponent from 'react-file-input-previews-base64';
import Axios from 'axios';
export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tsid      : 'xz010',
      uid       : 'uhy78839b',
      inputValue: ''
    };
  }

  submitData = e => {
    // console.log(this.state.inputValue);
    // e.preventDefault();
    if (this.state.inputValue !== '') {
      //提交数据
      var url = `http://47.92.98.104:8080/jkwy/InsertMaster_pasteServlet`;
      Axios({
        url   : url,
        method: 'post',
        data  : {
          tsid     : this.state.tsid,
          tContents: this.state.inputValue,
          tuid     : this.state.uid
        }
      }).then(res => {
        //返回值为空
        confirm('提交成功');
        if (confirm) {
          this.props.history.push(`/home/chart`);
        } else {
          alert('提交失败');
        }
      });
    }
  };

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  componentWillMount() {
    //获取用户信息
    // var userMessage = sessionStorage.getItem('user');
    // var userEntry = JSON.parse(userMessage);
    // console.log(userEntry);
    // this.setState({
    //   uid: userEntry
    // });
  }

  componentDidMount() {}

  render() {
    return (
      <Container className="contentQuestion">
        <Row className="questionContent">
          <Col>
            <Form>
              <FormGroup>
                <FormText color="muted" style={{ marginBottom: '10px' }}>
                  亲描述你的年龄、性别、症状及就诊经历。便于医生进行准确分析，我们确保你的隐私安全。
                </FormText>
                <Input
                  type     = "textarea"
                  name     = "text"
                  id       = "exampleText"
                  value    = {this.state.inputValue}
                  onChange = {e => this.handleInputChange(e)}
                  style    = {{
                    borderRadius: 0,
                    minHeight   : '200px',
                    height      : 'auto'
                  }}
                />
              </FormGroup>

              <FormGroup className="grayBack" style={{ marginTop: '10px' }} />
              <FormGroup style={{ marginTop: '10px' }}>
                <FormText color="muted">
                  医生将在24小时内回复你，若超时未回复，系统将关闭问题，您所说的问题请重新提交
                </FormText>
              </FormGroup>
              <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Button
                  className = "submitQuestion"
                  color     = "primary"
                  onClick   = {e => this.submitData(e)}
                >
                  提交问题
                </Button>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row className="questionText">
          <Col>
            注：医生回答只作为健康咨询类建议，不作为诊断和治疗依据，咨询建议不能代表医生面诊。如果不适感严重，请立即就医。
          </Col>
        </Row>
        <Row className="footerColor">
          <Col
            style = {{ border: '2px solid #999', borderRight: '1px solid #999' }}
          >
            <NavLink href="#/home/doctor">
              <Row
                style={{
                  textAlign    : 'center',
                  verticalAlign: 'middle',
                  padding      : '10px'
                }}
              >
                <Col>
                  <img src={require('../../../assets/images/Doctor.png')} />
                  找医生
                </Col>
              </Row>
            </NavLink>
          </Col>
          <Col
            style = {{ border: '2px solid #999', borderLeft: '1px solid #999' }}
          >
            <NavLink href="#/home/personal">
              <Row
                style={{
                  textAlign    : 'center',
                  verticalAlign: 'middle',
                  padding      : '10px'
                }}
              >
                <Col>
                  <img src={require('../../../assets/images/My.png')} />
                  我的
                </Col>
              </Row>
            </NavLink>
          </Col>
        </Row>
      </Container>
    );
  }
}
