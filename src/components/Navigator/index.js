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
export default class Navigator extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state  = {
      isOpen: false
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
      let url = `${this.props.history.location.pathname}medicine/?search=${
        this.refs.medicine.value
      }`;
      this.props.history.push(url);
    }
  };
  render() {
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
              <Button color="primary" id="sign">
                登录/注册
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
                  <NavLink to="/" exact>
                    首页
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/appointment">预约挂号</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/doctor">医生查询</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/article">精选专题</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/chart">交流专区</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/medicine">药品网</NavLink>
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
