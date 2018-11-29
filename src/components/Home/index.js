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
import { Navigator, Footer } from '../../components';
// import bg from "../../../assets/images/预约挂号.png"
const items = [
  {
    src: '/assets/images/微信图片_20181122161423.png'
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: '/assets/images/微信图片_20181122161435.png'
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: '/assets/images/20150608884.jpg'
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
    // console.log(this.props);
    if (this.props.match.url == '/') {
      this.props.history.push('/home');
    }
    // console.log(this.props);
    // 医生加载
    Axios({
      url   : 'http://47.92.98.104:8080/jkwy/famousDoctor',
      method: 'get'
    }).then(res => {
      // console.log(res.data.data);
      var data     = res.data;
      var dataList = [];
      // console.log(data.length);
      for (var i = 0; i < data.length; i++) {
        if (data[i].is_hot && dataList.length < 3) {
          dataList.push(
            <Col key={i} style={{ padding: 0 }}>
              <Card onClick={this.doctorClick.bind(this, data[i].did)}>
                <img
                  width  = "120"
                  height = "150"
                  src    = {'http://47.92.98.104:8080' + data[i].dimage}
                />
                <CardBody>
                  <CardTitle>
                    {data[i].dname}
                    <span>{data[i].Level}</span>
                  </CardTitle>
                  <CardSubtitle>{data[i].hospital}</CardSubtitle>
                  <CardSubtitle>{data[i].section}</CardSubtitle>
                  <CardText style={{ marginTop: 30 }}>
                    {data[i].apecial}
                  </CardText>
                  <div className="link-tip">
                    <CardLink href="#/appointment" className="left">
                      <img
                        src = {require('../../../assets/images/预约挂号.png')}
                      />
                      挂号
                    </CardLink>
                    <CardLink href="#" className="right_link">
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
      // console.log(this.state.doctor);
    });
    // 文章加载
    Axios({
      url   : 'http://47.92.98.104:8080/jkwy/gaoxueya',
      method: 'get'
    }).then(res => {
      console.log(res.data.data);
      let data       = res.data.data;
      let articlList = [];
      for (let i = 0; i < data.length; i++) {
        if (articlList.length < 5) {
          articlList.push(
            <li
              key     = {i}
              onClick = {this.articlClick.bind(this, data[i].id)}
              style   = {{ padding: 0 }}
            >
              <span>{data[i].title}</span>
            </li>
          );
        }
      }
      this.setState({
        articl: articlList
      });
      // console.log(this.state.articl);
    });
    // 回答加载
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
        // console.log(data[i].zhutie.length);
        for (let j = 0; j < data[i].zhutie.length; j++) {
          console.log(data[i].zhutie[j]);
          answersList.push(
            <div
              key     = {j}
              onClick = {this.answerClick.bind(this, data[i].zhutie[j].tid)}
            >
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
    // console.log(this.refs);
    if (this.refs.add.value || this.refs.hos.value || this.refs.klass.value) {
      // console.log(this.props.history.location.pathname);
      let url = `/appointment?add=${this.refs.add.value}&&hos=${
        this.refs.hos.value
      }&&klass=${this.refs.klass.value}`;
      this.props.history.push(url);
    }
  };

  doctorClick(a) {
    // console.log(a);
    // console.log(this);
    let url = `${this.props.match.url}/introduced?did=${a}`;
    // this.toDoctor(this);
    this.props.history.push(url);
  }
  articlClick(a) {
    // console.log(a);
    let url = `${this.props.match.url}/article/detail/cid=${a}`;
    // this.toDoctor(this);
    this.props.history.push(url);
  }
  answerClick(a) {
    console.log(this.props.match.url);
    let url = `${this.props.match.url}liuyan?tid=${a}`;
    console.log(url);
    this.props.history.push(url);
  }

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
              <Col style={{ padding: 0 }}>
                <img src={require('../../../assets/images/latest-news4.jpg')} />
              </Col>
              <Col style={{ padding: 0 }}>
                <img
                  src   = "../../../assets/images/true (2).jpg"
                  style = {{ height: 180 }}
                />
                <ul className="articlList">{this.state.articl}</ul>
              </Col>
              <Col style={{ padding: 0, paddingLeft: 30 }} className="answers">
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
