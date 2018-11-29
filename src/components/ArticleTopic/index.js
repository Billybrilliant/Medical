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
    this.state = { articlDetail: [], articlTitle: [], page: [] };
  }
  componentWillMount() {
    // console.log(this.props.location.search.split('?')[1]);
    var path = this.props.match.params.ttopic;
    if (path == 'food') {
      Axios({
        url   : 'http://47.92.98.104:8080/jkwy/findfood',
        method: 'get'
      }).then(res => {
        console.log(res.data);
        var data      = res.data.data;
        var foodList  = [];
        var titleList = [];
        var pages     = res.data.data.length / 5;
        var page      = [];
        for (var j = 0; j < pages; j++) {
          if (j == 0) {
            page.push(
              <PaginationItem active key={j}>
                <PaginationLink href="#">{j + 1}</PaginationLink>
              </PaginationItem>
            );
          } else {
            page.push(
              <PaginationItem key={j}>
                <PaginationLink href="#">{j + 1}</PaginationLink>
              </PaginationItem>
            );
          }
        }

        titleList.push(
          <Col key="foods" className="mainTitle">
            <h4>饮食健康指南</h4>
            <p>
              你总是听别人说饮食健康的重要性，但是却不知道从何开始。如何通过健康饮食，改善健康状况，让你身体健壮，我们认真在研究。
            </p>
          </Col>
        );
        for (let i = 0; i < data.length; i++) {
          if (foodList.length < 5) {
            foodList.push(
              <Media
                key     = {i}
                onClick = {this.articleContent.bind(this, data[i].id)}
              >
                <Media left href="#">
                  <img src={'http://47.92.98.104:8080' + data[i].cimage} />
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
        }
        this.setState({
          articlDetail: foodList,
          articlTitle : titleList,
          page        : page
        });
      });
    }
    if (path == 'Parenting') {
      Axios({
        url   : 'http://47.92.98.104:8080/jkwy/yuerjing',
        method: 'get'
      }).then(res => {
        // console.log(res.data.data);
        var data      = res.data.data;
        var foodList  = [];
        var titleList = [];
        var pages     = res.data.length / 5;
        var page      = [];
        for (var j = 0; j < pages; j++) {
          if (j == 0) {
            page.push(
              <PaginationItem active key={j}>
                <PaginationLink href="#">{j + 1}</PaginationLink>
              </PaginationItem>
            );
          } else {
            page.push(
              <PaginationItem key={j}>
                <PaginationLink href="#">{j + 1}</PaginationLink>
              </PaginationItem>
            );
          }
        }
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
            <Media key={i} onClick={this.articleContent.bind(this, data[i].id)}>
              <Media left href="#">
                <img src={data[i].cimage} />
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
          articlTitle : titleList,
          page        : page
        });
      });
    }
    if (path == 'hypertension') {
      Axios({
        url   : 'http://47.92.98.104:8080/jkwy/gaoxueya',
        method: 'get'
      }).then(res => {
        console.log(res.data.data);
        var data      = res.data.data;
        var foodList  = [];
        var titleList = [];
        var pages     = res.data.data.length / 5;
        var page      = [];
        for (var j = 0; j < pages; j++) {
          if (j == 0) {
            page.push(
              <PaginationItem active key={j}>
                <PaginationLink href="#">{j + 1}</PaginationLink>
              </PaginationItem>
            );
          } else {
            page.push(
              <PaginationItem key={j}>
                <PaginationLink href="#">{j + 1}</PaginationLink>
              </PaginationItem>
            );
          }
        }
        titleList.push(
          <Col key="foods" className="mainTitle">
            <h4>预防高血压</h4>
            <p>高血压你有多了解？如何降低血压，我们更专业，有我更贴心！</p>
          </Col>
        );
        for (let i = 0; i < data.length; i++) {
          foodList.push(
            <Media key={i} onClick={this.articleContent.bind(this, data[i].id)}>
              <Media left href="#">
                <img src={data[i].cimage} />
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
          articlTitle : titleList,
          page        : page
        });
      });
    }
  }
  articleContent(a) {
    console.log(a);
    var url = `${this.props.match.url}/cid=${a}`;
    this.props.history.push(url);
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
            {this.state.page}
          </Pagination>
        </div>
      </div>
    );
  }
}
