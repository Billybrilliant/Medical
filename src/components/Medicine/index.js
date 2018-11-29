import React, { Component } from 'react';
import axios from 'axios';
import './Medicine.scss';
import { connect } from 'react-redux';
import { fetchPageList, getPageData } from '../../actions';
// import 'react-tabs/style/react-tabs.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
import { TabContent, TabPane, Card, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';
const mapStateToProps = state => {
  return {
    pages: state.order.pages
  };
};
class Medicine extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state  = {
      activeTab: '1',

      result   : [],
      fmed:[]
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  componentWillMount() {
    $('#ul')
      .children()
      .eq(0)
      .addClass('act');

    axios({
      url   : 'http://47.92.98.104:8080/jkwy/medicinalType',
      method: 'get'
    }).then(res => {
      this.setState({
        result: res.data
      });
    });


  }
  componentDidMount() {
    this.toggle(1);

    this.props.fetchPageList();
    setTimeout(function() {
      $('#ul li')
        .eq(0)
        .addClass('act');
        $('.guide-tabs .tab-content .tab-pane').eq(0).addClass('active');
    }, 500);
    $('#ul').on('click', 'li', function() {
      $(this)
        .siblings()
        .removeClass('act');
      $(this).addClass('act');
    });
    $('.guide-tabs.tab-content').on('click','.tab-pane',function(){
      $(this)
      .siblings()
      .removeClass('active');
    $(this).addClass('active');
    })
    axios({
      url:'http://47.92.98.104:8080/jkwy/family',
      method:'get',
    }).then(res=>{

      this.setState({
        fmed:res.data
      })
    })
  }

  changePage = e => {
    var page = e.target.getAttribute('data-page');
    this.props.fetchPageList({ page: page });
  };
  showPageitem = () => {
    var pLen  = 22;
    var pages = Math.ceil(pLen / 8);
    var pJSX  = [];
    for (let i = 1; i <= pages; i++) {
      pJSX.push(
        <PaginationItem key={i}>
          <PaginationLink
            href      = "javascript:void(0)"
            data-page = {i}
            onClick   = {e => this.changePage(e)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pJSX;
  };
  showMed = () => {
    if (this.props.pages) {
      var sLen    = this.props.pages.length;
      var ss      = this.props.pages;
      var showJSX = [];
      for (let i = 0; i < sLen - 1; i++) {
        showJSX.push(
          <div className="showItem" key={i}>
            <a href="#">
              <div className="our">
                <img src={ss[i].imageNo} />
              </div>
              <p>{ss[i].intro}</p>
            </a>
          </div>
        );
      }
      return showJSX;
    }
  };
  showTabs = () => {
    if (this.state.result) {
      var Len      = this.state.result.length;
      var Res      = this.state.result;
      var classJSX = [];
      for (let i = 0; i < Len; i++) {
        classJSX.push(
          <NavItem key={i}>
            <NavLink
              onClick={e => {
                this.toggle(i + 1);
              }}
            >
              <span>{Res[i].type}</span>
              <i>&gt;</i>
            </NavLink>
          </NavItem>
        );
      }
      return classJSX;
    }
  };
  showTabsMain = () => {
    if (this.state.result) {
      var Len      = this.state.result.length;
      var Res      = this.state.result;
      var classJSX = [];
      for (let i = 0; i < Len; i++) {
        classJSX.push(
          <TabPane tabId={i + 1} key={i}>
            <Row>
              <Col sm="12">
                <div>
                  <h2>{Res[i].name}</h2>
                </div>
              </Col>
            </Row>
          </TabPane>
        );
      }
      return classJSX;
    }
  };
showFamily=()=>{
  if(this.state.fmed){
    var classJSX=[];
    var fMed=this.state.fmed;
    for(let i=0;i<fMed.length;i++){
      classJSX.push(
        <li>{fMed[i].ftype} &nbsp;&nbsp;&nbsp;&gt;</li>
      )
    }
    return classJSX;
  }
}
  render() {
    const { fetchPageList, pages } = this.props;
    return (
      <div className="div">
        <div className="tabs">
          <Container className="container">
            <Row>
              <Col md={{ size: 3 }} className="tabs-left">
                <Nav tabs id="ul">
                  {this.showTabs()}
                </Nav>
              </Col>
              <Col md={{ size: 9 }} className="tabs-right">
                <TabContent activeTab={this.state.activeTab}>
                  {this.showTabsMain()}
                </TabContent>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bigpic">
          <img src="" />
        </div>
        <div className="recommend">
          <div className="rec-title">
            <span />
            <p>健康推荐</p>
            <span />
          </div>
          <div className="showFive">
            <div className="showItem">
              <a href="#">
                <div className="our">
                  <img src={require('../../../assets/images/med/pic_1.png')} />
                </div>
                <p>江中 健胃消食片 0.8g</p>
              </a>
            </div>
            <div className="showItem">
              <a href="#">
                <div className="our">
                <img src={require('../../../assets/images/med/pic_2.png')} />
                </div>
                <p>江中 健胃消食片 0.8g</p>
              </a>
            </div>
            <div className="showItem">
              <a href="#">
                <div className="our">
                <img src={require('../../../assets/images/med/pic_3.png')} />
                </div>
                <p>江中 健胃消食片 0.8g</p>
              </a>
            </div>
            <div className="showItem">
              <a href="#">
                <div className="our">
                <img src={require('../../../assets/images/med/pic_4.png')} />
                </div>
                <p>江中 健胃消食片 0.8g</p>
              </a>
            </div>
            <div className="showItem">
              <a href="#">
                <div className="our">
                <img src={require('../../../assets/images/med/pic_5.png')} />
                </div>
                <p>江中 健胃消食片 0.8g</p>
              </a>
            </div>
          </div>
        </div>
        <div className="family">
          <Container className="container">
            <Row>
              <Col md={{ size: 2 }} className="tabs-left">
                <div className="family-tit">家庭常用药品</div>
                <ul className="family-class">
                 {this.showFamily()}

                </ul>
              </Col>
              <Col md={{ size: 10 }} className="tabs-right">
                <div className="f-top">
                  <img src="" />
                </div>
                <div className="showFamily">
                  <div className="showItem">
                    <a href="#">
                      <div className="our">
                        <img src="" />
                      </div>
                      <p>江中 健胃消食片 0.8g</p>
                    </a>
                  </div>
                  {this.showMed()}
                </div>
                {/* 分页   */}
                <Pagination
                  aria-label = "Page navigation example"
                  className  = "page"
                >
                  {this.showPageitem()}
                </Pagination>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="brand">
          <div className="rec-title">
            <span />
            <p>热门品牌</p>
            <span />
          </div>
          <div className="brand-box">
            <div className="solid" />
            <div className="solid1" />
            <div className="box-top">
              <a href="#">
                <img src={require('../../../assets/images/med/logo1.jpg')} />
              </a>
              <a href="#">
                <img src={require('../../../assets/images/med/logo2.jpg')} />
              </a>
              <a href="#">
                <img src={require('../../../assets/images/med/logo3.jpg')} />
              </a>
              <a href="#">
                <img src={require('../../../assets/images/med/logo4.jpg')} />
              </a>
              <a href="#">
                <img src={require('../../../assets/images/med/logo5.jpg')} />
              </a>
              <a href="#">
                <img src={require('../../../assets/images/med/logo6.jpg')} />
              </a>
              <a href="#">
                <img src={require('../../../assets/images/med/logo7.jpg')} />
              </a>
            </div>
            <div className="box-btm">
              <a href="#">
                <img src={require('../../../assets/images/med/logo8.jpg')} />
              </a>
              <a href="#">
                <img src={require('../../../assets/images/med/logo9.jpg')} />
              </a>
              <a href="#">
                <img src={require('../../../assets/images/med/logo10.jpg')} />
              </a>
              <a href="#">
                <img src={require('../../../assets/images/med/logo11.jpg')} />
              </a>
              <a href="#">
                <img src={require('../../../assets/images/med/logo12.jpg')} />
              </a>
              <a href="#">
                <img src={require('../../../assets/images/med/logo13.jpg')} />
              </a>
              <a href="#">
                <img src={require('../../../assets/images/med/logo14.jpg')} />
              </a>
            </div>
          </div>
        </div>
        <div className="guide">
          <div className="guide-tit">
            <span>用药指导</span>
          </div>
          <div className="guide-tabs">
            <Nav tabs>
              <NavItem>
                <NavLink
                  onClick={() => {
                    this.toggle('1');
                  }}
                >
                  用药指导1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => {
                    this.toggle('2');
                  }}
                >
                  用药指导2
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => {
                    this.toggle('3');
                  }}
                >
                  用药指导3
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => {
                    this.toggle('4');
                  }}
                >
                  用药指导4
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => {
                    this.toggle('5');
                  }}
                >
                  用药指导5
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab} >
              <TabPane tabId="1" >
                <Row>
                  <Col sm="3">
                    <img src={require('../../../assets/images/med/pic_17.png')} />
                  </Col>
                  <Col sm="9">
                    <ul>
                      <li>
                        <h4>冬季肝脏易受伤 警惕六位肝脏杀手</h4>
                      </li>
                      <li>
                        常话说：怒则伤肝，人的精神、情绪都与肝息息相关，若是情绪不佳，精神就会郁闷，暴怒激动都会影响到肝的机能，加速病变。抑郁的人也会使得“肝气郁结”，更加伤害肝脏。
                      </li>
                    </ul>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
              <Row>
                  <Col sm="3">
                    <img src={require('../../../assets/images/med/pic_17.png')} />
                  </Col>
                  <Col sm="9">
                    <ul>
                      <li>
                        <h4>2冬季肝脏易受伤 警惕六位肝脏杀手</h4>
                      </li>
                      <li>
                        常话说：怒则伤肝，人的精神、情绪都与肝息息相关，若是情绪不佳，精神就会郁闷，暴怒激动都会影响到肝的机能，加速病变。抑郁的人也会使得“肝气郁结”，更加伤害肝脏。
                      </li>
                    </ul>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
              <Row>
                  <Col sm="3">
                    <img src={require('../../../assets/images/med/pic_17.png')} />
                  </Col>
                  <Col sm="9">
                    <ul>
                      <li>
                        <h4>3冬季肝脏易受伤 警惕六位肝脏杀手</h4>
                      </li>
                      <li>
                        常话说：怒则伤肝，人的精神、情绪都与肝息息相关，若是情绪不佳，精神就会郁闷，暴怒激动都会影响到肝的机能，加速病变。抑郁的人也会使得“肝气郁结”，更加伤害肝脏。
                      </li>
                    </ul>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4">
              <Row>
                  <Col sm="3">
                    <img src={require('../../../assets/images/med/pic_17.png')} />
                  </Col>
                  <Col sm="9">
                    <ul>
                      <li>
                        <h4>4冬季肝脏易受伤 警惕六位肝脏杀手</h4>
                      </li>
                      <li>
                        常话说：怒则伤肝，人的精神、情绪都与肝息息相关，若是情绪不佳，精神就会郁闷，暴怒激动都会影响到肝的机能，加速病变。抑郁的人也会使得“肝气郁结”，更加伤害肝脏。
                      </li>
                    </ul>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="5">
              <Row>
                  <Col sm="3">
                    <img src={require('../../../assets/images/med/pic_17.png')} />
                  </Col>
                  <Col sm="9">
                    <ul>
                      <li>
                        <h4>5冬季肝脏易受伤 警惕六位肝脏杀手</h4>
                      </li>
                      <li>
                        常话说：怒则伤肝，人的精神、情绪都与肝息息相关，若是情绪不佳，精神就会郁闷，暴怒激动都会影响到肝的机能，加速病变。抑郁的人也会使得“肝气郁结”，更加伤害肝脏。
                      </li>
                    </ul>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
          <div className="guide-list">
            <dl>
              <dd>
                <i>【肝病用药】</i>
                <span>壳脂胶囊有效期是多久？</span>
              </dd>
              <dd>
                <i>【神经系统】</i>
                <span>壳脂胶囊有效期是多久？</span>
              </dd>
              <dd>
                <i>【心脑血管】</i>
                <span>壳脂胶囊有效期是多久？</span>
              </dd>
              <dd>
                <i>【皮肤性病】</i>
                <span>壳脂胶囊有效期是多久？</span>
              </dd>
            </dl>
            <dl>
              <dd>
                <i>【肝病用药】</i>
                <span>壳脂胶囊有效期是多久？</span>
              </dd>
              <dd>
                <i>【神经系统】</i>
                <span>
                  壳脂胶囊有效ssssssssssssssssdddddddddddddddddddddddddddddddd期是多久？
                </span>
              </dd>
              <dd>
                <i>【心脑血管】</i>
                <span>壳脂胶囊有效期是多久？</span>
              </dd>
              <dd>
                <i>【皮肤性病】</i>
                <span>壳脂胶囊有效期是多久？</span>
              </dd>
            </dl>
            <dl>
              <dd>
                <i>【肝病用药】</i>
                <span>壳脂胶囊有效期是多久？</span>
              </dd>
              <dd>
                <i>【神经系统】</i>
                <span>壳脂胶囊有效期是多久？</span>
              </dd>
              <dd>
                <i>【心脑血管】</i>
                <span>壳脂胶囊有效期是多久？</span>
              </dd>
              <dd>
                <i>【皮肤性病】</i>
                <span>壳脂胶囊有效期是多久？</span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  { fetchPageList }
)(Medicine);
