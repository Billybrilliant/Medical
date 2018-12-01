import React, { Component } from 'react';
import { Row, Col, Container, Table } from 'reactstrap';
import './Details.scss';
import { white } from 'ansi-colors';
import axios from 'axios';
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name          : '',
      // style         : '',
      // data          : '',
      // main_materials: '',
      // effect        : '',
      // use_methods   : '',
      // company       : '',
      // attention     : ''
      myText: ''
    };
  }
  getData() {
    axios({
      url   : `http://47.92.98.104:8080/jkwy/medicinal/${mid}`,
      method: 'get'
    }).then(res => {
      console.log(res.data);
      var data = res.data;
      for (var i in data) {
        //  console.log(data[i].name);
        this.setState({
          // name          : res.data.name,
          // style         : res.data.style,
          // data          : res.data.data,
          // main_materials: res.data.main_materials,
          // effect        : res.data.effect,
          // use_methods   : res.data.use_methods,
          // company       : res.data.company,
          // attention     : res.data.attention
          myText: data[i]
        });
      }
    });
  }
  componentWillMount() {
    this.getData();
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            <div id="goods_pic">
              <img
                src       = {require('../../../assets/images/0d85ae5a637ca44ff1c9da685376612b.png')}
                className = "demo-img pos-center"
              />
            </div>
          </Col>
          <Col xs="6" id="goods_details">
            <h3>江中 健胃消食片(成人)0.8g*32片。</h3>
            <p>
              健胃消食，用于脾胃虚弱所致的食积，症见不思饮食嗳腐酸臭、脘腹胀满，消化不良见上述症候者...
            </p>
          {/*   <div className="goods_price">
              <span> 市 场 价 ：</span>
              <span>￥</span>
              <span>11.00</span>
    </div> */}
            <div className="goods_name">
              <span>通用名称：</span>
              <span className="public_name">健胃消食片</span>
            </div>
            <div className="goods_number">
              <span>产品编号：</span>
              <span>X1551</span>
            </div>
            <div className="goods_promise">
              <span>批准文号：</span>
              <span>国药准字号Z20013220</span>
            </div>
           {/*  <div className="goods_vender">
              <span>生产厂家：</span>
              <span className="company">江中药业股份有限公司</span>
  </div> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>药品详情</h2>
          </Col>
        </Row>
        <Table bordered style={{ background: white }}>
          {/*<tbody>
            <tr>
              <td style={{width:'120px'}}>产品名称</td>
              <td>江中 健胃消食片（儿童）0.5g*36片</td>
            </tr>
            <tr>
              <td>产品规格</td>
              <td>0.5g*36片(儿童) （江中）</td>
            </tr>
            <tr>
              <td>有效日期</td>
              <td>24个月</td>
            </tr>
            <tr>
            <td>主要原料</td>
            <td>太子参、陈皮、山药、麦芽（炒）、山楂</td>
          </tr>
          <tr>
          <td>主要作用</td>
          <td>健胃消食。用于脾胃虚弱所致的食积，症见不思饮食、嗳腐酸臭、脘腹胀满;消化不良见上述症候者</td>
         </tr>
         <tr>
         <td>用法用量</td>
         <td>口服，可以拒绝，成人一次4-6片;儿童二岁至四岁一次2片，五岁至八岁一次3片，九岁至十四岁一次4片一日3次。</td>
         </tr>
         <tr>
         <td>生产企业</td>
         <td>江中药业股份有限公司</td>
         </tr>
         <tr>
          <td>注意事项</td>
          <td>1.饮食宜清淡，忌酒及辛辣、生冷、油腻食物。
          2.有高血压、心脏病、肝病、糖尿病、肾病等慢性严重者应在医师指导下服用。<br/>
          3.儿童、孕妇、哺乳期妇女、年老弱者应在医师指导下服用。<br/>
          4.服药3天症状无缓解，应取医院就诊。<br/>
          5.对本品过敏者禁用，过敏体质者慎用。<br/>
          6.本品性状发生改变时禁止使用。<br/>
          7.儿童必须在成人监护下使用。<br/>
          8.请将本品放在儿童不能接触的地方。<br/>
         9.如正在使用其他药品，使用本品前请咨询医师或者药师。</td>
         </tr>
          </tbody> */}
          <tbody>
            <tr>
              <td style={{ width: '120px' }}>产品名称</td>
              <td>{this.state.myText.name}</td>
            </tr>
            <tr>
              <td>产品规格</td>
              <td>{this.state.myText.style}</td>
            </tr>
            <tr>
              <td>有效日期</td>
              <td>{this.state.myText.data}</td>
            </tr>
            <tr>
              <td>主要原料</td>
              <td>{this.state.myText.main_materials}</td>
            </tr>
            <tr>
              <td>主要作用</td>
              <td>{this.state.myText.effect}</td>
            </tr>
            <tr>
              <td>用法用量</td>
              <td>{this.state.myText.use_methods}</td>
            </tr>
            <tr>
              <td>生产企业</td>
              <td>{this.state.myText.company}</td>
            </tr>
            <tr>
              <td>注意事项</td>
              <td>{this.state.myText.attention}</td>
            </tr>
          </tbody>
        </Table>
        <Row>
          <Col>
            <div id="details_pic">
              <img
                src = {require('../../../assets/images/9245692456_20160725113825110.jpg')}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="details_pic">
              <img
                src = {require('../../../assets/images/1688516885_20160725113825406.jpg')}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="details_pic">
              <img
                src = {require('../../../assets/images/9873998739_20160725113825782.jpg')}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="details_pic">
              <img
                src = {require('../../../assets/images/4858348583_20160725113826048.jpg')}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="6" id="details_photo">
            <img
              src = {require('../../../assets/images/6428764287_20160725113827126.jpg')}
            />
          </Col>
          <Col xs="6" id="details_photo">
            <img
              src = {require('../../../assets/images/6772267722_20160725113826548.jpg')}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Details;
