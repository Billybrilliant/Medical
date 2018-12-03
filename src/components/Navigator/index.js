import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Container,
  Row,
  Col
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Navigator.scss';
import { connect } from 'react-redux';
import Axios from 'axios';
// const mapStateToProps = state => {
//   // console.log(state.order);
//   return {
//     loginin: state.order.loginin
//   };
// };

class Navigator extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state  = {
      isOpen     : false,
      loginButton: '登录/注册',
      buttonStyle: {
        background: '#84c225'
      }
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  medicineSearch = () => {
    // console.log(this.props.history.location.pathname);
    // console.log(this.refs.medicine.value);
    if (this.refs.medicine.value) {
      Axios({
        url: `http://47.92.98.104:8080/jkwy/typeMedicinals?name=${
          this.refs.medicine.value
        }`,
        method: 'get'
      }).then(res => {
        this.props.history.push(`/home/medicine/mid=${res.data[0].mid}`);
      });
    }
  };
  loginClick = e => {
    // console.log(this.props);
    // console.log(e.target.value);
    // this.props.history.push('/login');
    if (e.target.value == '登录/注册') {
      this.props.history.push('/login');
    } else {
      this.props.history.push('/home/personal');
    }
  };
  componentWillMount = () => {
    // console.log(this.state.loginButton);
    var userJsonStr = sessionStorage.getItem('user');
    var userEntity  = JSON.parse(userJsonStr);
    if (userEntity) {
      this.setState({
        loginButton: '个人中心',
        buttonStyle: {
          background: '#fd9115'
        }
      });
    }
  };
  render() {
    // console.log(this.props.loginin);
    return (
      <div>
        <div id="top_top">
          <Container>
            <Row>
              <Col>
                <h6>
                  你好！<span>用户</span>
                </h6>
              </Col>
              <Col id="telphone">
                <img
                  src = {require('../../../assets/images/电话.png')}
                  id  = "phone-icon"
                />
                <span>热线电话：4008-115-160</span>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row id="top_mid">
            <Col lg={{ size: 4, offset: 4 }}>
              <img src={require('../../../assets/images/logo/画板 1.png')} />
            </Col>
            <Col lg="4" id="sign_box">
              <Button
                color   = "primary"
                id      = "sign"
                onClick = {this.loginClick}
                value   = {this.state.loginButton}
                style   = {this.state.buttonStyle}
              >
                {this.state.loginButton}
              </Button>
            </Col>
          </Row>
        </Container>
        <Navbar
          color = ""
          light
          expand = "md"
          style  = {{ background: ' #4ebec0', color: '#fff' }}
        >
          <NavbarBrand href="/" />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Container>
              <Nav className="ml-auto" navbar style={{ margin: '0 auto' }}>
                <NavItem>
                  <NavLink to="/home/" exact>
                    首页
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/appointment">预约挂号</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/home/doctor">医生查询</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/home/article">精选专题</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/home/chart">交流专区</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/home/medicine">药品网</NavLink>
                </NavItem>
                <NavItem>
                  <input
                    type        = "text"
                    id          = "search"
                    ref         = "medicine"
                    placeholder = "药品/药品种类"
                  />
                  <img
                    src     = {require('../../../assets/images/search.png')}
                    id      = "searchicon"
                    onClick = {this.medicineSearch}
                  />
                </NavItem>
              </Nav>
            </Container>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
// export default connect(mapStateToProps)(Navigator);
export default Navigator;
