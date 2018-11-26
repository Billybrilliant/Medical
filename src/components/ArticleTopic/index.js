import React, { Component } from 'react';
import './index.scss';
import Axios from 'axios';
import {
  Media,
  Row,
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
import { ENGINE_METHOD_STORE } from 'constants';
export default class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { articlDetail: [], articlTitle: [] };
  }
  componentWillMount() {
    // console.log(this.props.location.search.split('?')[1]);
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
        titleList.push(
          <Col key="foods" className="mainTitle">
            <h4>饮食健康指南</h4>
            <p>
              你总是听别人说饮食健康的重要性，但是却不知道从何开始。如何通过健康饮食，改善健康状况，让你身体健壮，我们认真在研究。
            </p>
          </Col>
        );
        for (let i = 0; i < data.length; i++) {
          foodList.push(
            <Media key={i}>
              <Media left href="#">
                <img src={data[i].cimge} />
              </Media>
              <Media body>
                <Media heading>{data[i].title}</Media>
                <div className="author">
                  <span>作者：{data[i].cname}</span>
                </div>
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
    if (path == 'Parenting') {
      Axios({
        url   : 'http://localhost:5000/articl',
        method: 'get'
      }).then(res => {
        console.log(res.data);
        var data      = res.data;
        var foodList  = [];
        var titleList = [];
        titleList.push(
          <Col key="foods" className="mainTitle">
            <h4>育儿经</h4>
            <p>
              不必刻意观察，孩子就感受到我们太多的东西!不必刻意模仿，孩子就模仿了我们太多的态！
              我们想怎样并不重要，孩子从我们的行为中看到了什么、学到了什么才重要！
            </p>
          </Col>
        );
        for (let i = 0; i < data.length; i++) {
          foodList.push(
            <Media key={i}>
              <Media left href="#">
                <img src={data[i].cimge} />
              </Media>
              <Media body>
                <Media heading>{data[i].title}</Media>
                <div className="author">
                  <span>作者：{data[i].cname}</span>
                </div>
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
    if (path == 'hypertension') {
      Axios({
        url   : 'http://localhost:5000/articl',
        method: 'get'
      }).then(res => {
        console.log(res.data);
        var data      = res.data;
        var foodList  = [];
        var titleList = [];
        titleList.push(
          <Col key="foods" className="mainTitle">
            <h4>预防高血压</h4>
            <p>高血压你有多了解？如何降低血压，我们更专业，有我更贴心！</p>
          </Col>
        );
        for (let i = 0; i < data.length; i++) {
          foodList.push(
            <Media key={i}>
              <Media left href="#">
                <img src={data[i].cimge} />
              </Media>
              <Media body>
                <Media heading>{data[i].title}</Media>
                <div className="author">
                  <span>作者：{data[i].cname}</span>
                </div>
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
      <div className="articlBox">
        <Container className="articlMain">
          <Row>{this.state.articlTitle}</Row>
          <Row>
            <Col style={{ padding: 0 }}>
              <div>{this.state.articlDetail}</div>
            </Col>
          </Row>
        </Container>
        <div className="articlPages">
          <Pagination aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    );
  }
}
