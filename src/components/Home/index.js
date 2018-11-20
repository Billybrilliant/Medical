import React, { Component } from 'react';
import './Home.scss';
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
    this.state     = { activeIndex: 0, doctor: [] };
    this.next      = this.next.bind(this);
    this.previous  = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited  = this.onExited.bind(this);
  }

  componentWillMount() {
    Axios({
      url   : '  http://localhost:3000/people',
      method: 'get'
    }).then(res => {
      // console.log(res.data);
      var data     = res.data;
      var dataList = [];
      // console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].is_hot && dataList.length < 3) {
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
                  <CardSubtitle>{data[i].Section}</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <div className="link-tip">
                    <CardLink href="#" className="left">
                      <img src={require('../../assets/images/预约挂号.png')} />
                      挂号
                    </CardLink>
                    <CardLink href="#" className="right">
                      <img src={require('../../assets/images/电话 (1).png')} />
                      电话
                    </CardLink>
                  </div>
                </CardBody>
              </Card>
            </Col>
          );
        }
      }
      // console.log(dataList);
      this.setState({
        doctor: dataList
      });
      // console.log(this.state.doctor);
    });
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
                <input type="text" id="add" />
              </Col>
              <Col md={{ size: 5, offset: 1 }}>
                <label htmlFor="hos">医院&nbsp;: &nbsp; </label>
                <input type="text" id="hos" />
              </Col>
              <Col md={{ size: 5, offset: 1 }}>
                <label htmlFor="klass">科室&nbsp;: &nbsp; </label>
                <input type="text" id="klass" />
              </Col>
              <Col md={{ size: 5, offset: 1 }} className="speed-btn">
                <Button color="danger">快速预约</Button>
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
            <Row>{this.state.doctor}</Row>
            <Row>
              <Col>
                <h4>健康百科</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>合作伙伴</h4>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
