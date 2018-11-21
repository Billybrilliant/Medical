import React, { Component } from 'react';
import './index.scss';
import {
  Carousel,
  CarouselItem,
  Row,
  Col,
  Container,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import Axios from 'axios';
// import bg from "../../../assets/images/预约挂号.png"
const items = [
  {
    src: 
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: 
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: 
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  }
];
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state     = { activeIndex: 0, doctor: [], articl: [], answers: [] };
    this.next      = this.next.bind(this);
    this.previous  = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited  = this.onExited.bind(this);
  }

  componentWillMount() {
    Axios({
      url   : '  http://localhost:5000/data',
      method: 'get'
    }).then(res => {
      // console.log(res.data);
      var data     = res.data;
      var dataList = [];
      // console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (dataList.length < 3) {
          dataList.push(
            <Col key={i} md="4" style={{ padding: 0 }}>
              <Card>
                <img width="120" src={data[i].dimg} />
                <CardBody>
                  <CardTitle>
                    {data[i].dname}
                    <span>{data[i].Level}</span>
                  </CardTitle>
                  <CardSubtitle>{data[i].hospital}</CardSubtitle>
                  <CardSubtitle>{data[i].section}</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <div className="link-tip">
                    <CardLink href="#" className="left">
                      <img
                        src = {require('../../../assets/images/预约挂号.png')}
                      />
                      挂号
                    </CardLink>
                    <CardLink href="#" className="right">
                      <img
                        src = {require('../../../assets/images/电话 (1).png')}
                      />
                      电话
                    </CardLink>
                  </div>
                </CardBody>
              </Card>
            </Col>
          );
        }
      }
      // console.log(this);
      this.setState({
        doctor: dataList
      });
      console.log(this.state.doctor);
    });

    Axios({
      url   : 'http://localhost:5000/news',
      method: 'get'
    }).then(res => {
      // console.log(res.data);
      let data       = res.data;
      let articlList = [];
      for (let i = 0; i < data.length; i++) {
        if (articlList.length < 8) {
          articlList.push(<li key={i}>{data[i].ctitle}</li>);
        }
      }
      this.setState({
        articl: articlList
      });
      console.log(this.state.articl);
    });

    Axios({
      url   : 'http://localhost:5000/ansers',
      method: 'get'
    }).then(res => {
      // console.log(res.data);
      // console.log(res.data[0].zhutie);
      // console.log(res.data[0].zhutie[0].ttopic);
      // console.log(res.data[0].zhutie[0].tcontents);
      var data        = res.data;
      var answersList = [];
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].zhutie.length);
        for (let j = 0; j < data[i].zhutie.length; j++) {
          console.log(data[i].zhutie[j]);
          answersList.push(
            <div key={j}>
              <h6>{data[i].zhutie[j].ttopic}</h6>
              <p>{data[i].zhutie[j].tcontents}</p>
            </div>
          );
        }
      }
      // console.log(answersList);
      this.setState({
        answers: answersList
      });
      // console.log(this.state.answers);
    });
  }
  speedOrder = () => {
    console.log(this.refs);
    console.log(1);
  };
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = 
      this.state.activeIndex === items.length - 1
        ? 0
        :  this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = 
      this.state.activeIndex === 0
        ? items.length - 1
        :  this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting = {this.onExiting}
          onExited  = {this.onExited}
          key       = {item.src}
        >
          <img src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <Carousel
          activeIndex = {activeIndex}
          next        = {this.next}
          previous    = {this.previous}
        >
          {slides}
        </Carousel>
        <div className="tips-title">
          <Container>
            <Row>
              <h5>快速预约挂号</h5>
            </Row>
          </Container>
        </div>
        <div className="tips-content">
          <Container>
            <Row>
              <Col md={{ size: 5, offset: 1 }}>
                <label htmlFor="add">地区&nbsp;: &nbsp; </label>
                <input type="text" ref="add" />
              </Col>
              <Col md={{ size: 5, offset: 1 }}>
                <label htmlFor="hos">医院&nbsp;: &nbsp; </label>
                <input type="text" ref="hos" />
              </Col>
              <Col md={{ size: 5, offset: 1 }}>
                <label htmlFor="klass">科室&nbsp;: &nbsp; </label>
                <input type="text" ref="klass" />
              </Col>
              <Col md={{ size: 5, offset: 1 }} className="speed-btn">
                <Button color="danger" onClick={this.speedOrder}>
                  快速预约
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="main-conent">
          <Container style={{ padding: 0 }}>
            <Row>
              <Col>
                <h4>名医推荐</h4>
              </Col>
            </Row>
            <Row className="doctor_card">{this.state.doctor}</Row>
            <Row>
              <Col>
                <h4>健康百科</h4>
              </Col>
            </Row>
            <Row className="health">
              <Col md="4" style={{ padding: 0 }}>
                <img src={require('../../../assets/images/latest-news4.jpg')} />
              </Col>
              <Col md="4" style={{ padding: 0 }}>
                <ul className="articlList">{this.state.articl}</ul>
              </Col>
              <Col
                md        = "4"
                style     = {{ padding: 0, paddingLeft: 30 }}
                className = "answers"
              >
                <h3>热门回答</h3>
                {this.state.answers}
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>合作伙伴</h4>
              </Col>
            </Row>
          </Container>
          <div className="toghter">
            <Container>
              <Row className="toghter-box">
                <div>
                  <img
                    src = {require('../../../assets/images/cgal-2-img15.png')}
                  />
                  <p>中国人寿</p>
                </div>
                <div>
                  <img
                    src = {require('../../../assets/images/cgal-2-img13.png')}
                  />
                  <p>中信银行</p>
                </div>
                <div>
                  <img
                    src = {require('../../../assets/images/cgal-2-img10.png')}
                  />
                  <p>三峡银行</p>
                </div>
                <div>
                  <img
                    src = {require('../../../assets/images/cgal-2-img6.png')}
                  />
                  <p>延峰江森</p>
                </div>
                <div>
                  <img
                    src = {require('../../../assets/images/cgal-2-img11.png')}
                  />
                  <p>民生银行</p>
                </div>
                <div>
                  <img
                    src = {require('../../../assets/images/cgal-2-img3.png')}
                  />
                  <p>中国建设银行</p>
                </div>
                <div>
                  <img
                    src = {require('../../../assets/images/cgal-2-img7.png')}
                  />
                  <p>中国银行</p>
                </div>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
