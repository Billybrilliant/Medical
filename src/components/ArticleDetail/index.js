import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../../actions/counter';
import './detail.css';
import { Container, Row, Col } from 'reactstrap';
import Axios from 'axios';


class ArticleDetail extends Component {
  constructor(props){
    super(props);
    this.state={
      type          : '',
      cid           : '',
      articalContent: '',
      commonUrl     : 'http://47.92.98.104:8080'
    }
  }

  componentWillMount() {
    {
      /* 接收参数 */
      var bigArray = this.props.match.params.cid.split('&');
      var oneArray = bigArray[0];
      var twoArray = bigArray[1];
      this.setState({
        type: twoArray.split('=')[1],
        cid : oneArray.split('=')[1]
      })
    }
  }

  componentDidMount() {
    // var bigArray = this.props.match.params.cid.split('&');
    // var oneArray = bigArray[0];
    // var twoArray = bigArray[1];
    // console.log(oneArray.split('=')[1]);
    // console.log(twoArray.split('=')[1]);
    // var type = twoArray.split('=')[1];
    // var wid  = oneArray.split('=')[1];
    var url = `${this.state.commonUrl}/jkwy/${this.state.type}`;
    Axios({
      url   : url,
      method: 'get',
      params: {
        id: this.state.cid
      }
    }).then(res=>{
      console.log(res.data.data[0]);
      this.setState({
        articalContent: res.data.data[0]
      })
    })
  }

  render() {
    const {title,cimage,desc} = this.state.articalContent;
    return (
      <Container className="bigContent">
        <Row>
          {/* 左边 */}
          <Col xs="9" className="leftContent">
            <h3>{title}</h3>
            <p>
              作者：于仁文
            </p>
            <div>
              <img src={'http://47.92.98.104:8080' + cimage} />
            </div>
            <p>{desc}</p>
          </Col>
          {/* 右边 */}
          <Col xs="3" id="rightDoctor">
            <div className="rightContent">
              <Row>
                <div id="docImg">
                  <img src="../../../assets/images/tnnfzeob.jpg" />
                </div>
              </Row>
              <Row>
                <p>于仁文</p>
                <p>中国人民解放军陆军总医院 营养师</p>
                <hr />
                <p>来问医生更多患者问题</p>
                <p>
                  医生，你好，我女朋友嫌弃自己胸部小，看到市面上一些丰胸的产品就想买.....
                </p>
                <p>
                  你好，我本人20，体重186斤，身高164，从小一直胖到大前几年试过吃一些....
                </p>
                <p>求解：炒菜里大蒜变蓝究竟是好是坏？是加了醋的缘故吗？</p>
                <p>
                  请问，我想控制饮食怕体重增加，可是晚饭不敢少吃，因为少吃肉吃的清淡晚上就饿....
                </p>
                <p>
                  于医生您好，我想咨询一下：本人46岁，身高155，体重61公斤.....
                </p>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ArticleDetail;
