import React, { Component } from 'react';
import './index.scss';
import Axios from 'axios';
import { Media, Row, Col, Container } from 'reactstrap';
import { ENGINE_METHOD_STORE } from 'constants';
export default class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { articlDetail: [], articlTitle: [] };
  }
  componentWillMount() {
    console.log(this.props.match.params.ttopic);
    var path = this.props.match.params.ttopic;
    if (path == 'food') {
      Axios({
        url   : 'http://localhost:5000/articl',
        method: 'get'
      }).then(res => {
        console.log(res.data);
        var data      = res.data;
        var foodList  = [];
        var titleList = [];
        for (let i = 0; i < data.length; i++) {
          titleList.push(
            <Col key={i} className="mainTitle">
              <h4>饮食健康指南</h4>
              <p>
                你总是听别人说饮食健康的重要性，但是却不知道从何开始。如何通过健康饮食，改善健康状况，让你身体健壮，我们认真在研究。
              </p>
            </Col>
          );
          foodList.push(
            <Media key={i}>
              <Media left href="#">
                <Media object data-src={data[i].cimge} />
              </Media>
              <Media body>
                <Media heading>{data[i].title}</Media>
                {data[i].cdesc}
              </Media>
            </Media>
          );
        }
        this.setState({
          articlDetail: foodList,
          articlTitle : titleList
        });
      });
    }
  }
  render() {
    return (
      <Container className="articlMain">
        <Row>{this.state.articlTitle}</Row>
        <Row>
          <Col>
            <div>{this.state.articlDetail}</div>
          </Col>
        </Row>
      </Container>
    );
  }
}
