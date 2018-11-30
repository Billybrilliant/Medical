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
    this.state             = {
      did       : '',
      source    : '',
      imgList   : [],
      inputValue: ''
    };
  }

  submitData = e => {
    // console.log(this.state.imgList);
    // console.log(this.state.inputValue);
    // e.preventDefault();
    var imgValue = this.state.imgList;
    var baseList = [];
    var len      = imgValue.length;
    for(var i=0;i<len;i++){
      baseList.push(imgValue[i].base64);
    }
    console.log(baseList);
    e.preventDefault();
    // var url = `http://47.92.98.104:8080/jkwy/InsertMaster_pasteServlet`;
    // if(this.state.did !== '' && this.state.imgList.length > 0 && this.state.inputValue !== ''){
    //   Axios({
    //     url   : url,
    //     method: 'post',
    //     data  : {
    //       did       : this.state.did,
    //       imgList   : this.state.imgList,
    //       inputValue: this.state.inputValue
    //     }
    //   }).then(res=>{
    //     //后端实现跳转，这里我们就不做什么操作了
    //   })
    // }
  };

  handleInputChange = e => {
    this.setState({
        inputValue: e.target.value
    });
  }

  componentWillMount() {
    //判断是否有id传过来
    if (this.props.location.search.slice(1).split('=')[1] !== '') {
      var d = this.props.location.search.slice(1).split('=')[1];
      this.setState({
        //医生id
        did: d
      });
    }
  }

  componentDidMount() {
    //发送ajax请求获取医生信息,返回一个对象赋值给source
    //假定的后端地址，通过医生id获得医生信息
    var url = `http://localhost:3000/posts/${this.state.did}`;
    Axios({
      url   : url,
      method: 'get'
    }).then(res => {
      this.setState({
        source: res.data
      });
    });
  }

  render() {
    //console.log(this.state.did);
    //console.log(document.getElementsByClassName('questionHead'));
    let Header;
    if (this.state.did !== undefined) {
      Header = (
        <Row className="questionHead">
          <Col xs="1" className="letfHeadImg">
            <img src="../../../static/images/questions/3302838893724077580-22.jpg" />
          </Col>
          <Col xs="10">
            <Row>
              <h5>{this.state.source.name}</h5>
            </Row>
            <Row>{this.state.source.title}</Row>
            <Row>{this.state.source.content}</Row>
          </Col>
          <Col xs="1" className="rightButton" />
        </Row>
      );
    } else {
      Header = '';
    }
    return (
      <Container className="contentQuestion">
        {Header}
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
                  onChange = {(e) => this.handleInputChange(e)}
                  style    = {{
                    borderRadius: 0,
                    minHeight   : '200px',
                    height      : 'auto'
                  }}
                />
              </FormGroup>
              <hr />
              <div>
                <FileInputComponent
                  labelText        = "选择文件（注：要上传多张图片请一次性选中多张图片上传，最多九张）"
                  labelStyle       = {{ fontSize: 14 }}
                  multiple         = {true}
                  callbackFunction = {file_arr => {
                    //console.log(file_arr)
                    this.setState({
                      imgList: file_arr
                    });
                  }}
                  accept = "image/*"
                />
              </div>
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
                  type      = "submit"
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
                  <img src="../../../assets/images/Doctor.png" />
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
                <img src="../../../assets/images/My.png" />
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
