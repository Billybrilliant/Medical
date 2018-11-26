import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Chart.css';
import { connect } from 'react-redux';
import { increase, fetchList } from '../../../actions/counter';
// import Red from "../../../assets/images/Red.png";
// import Green from "../../../assets/images/Green.png";
const mapStateToProps = state => {
  console.log(state.chart.lists);
  return {
    lists: state.chart.lists
  };
};

class Chart extends Component {
  componentDidMount() {
    this.props.fetchList();
  }
  showList = () => {
    var jsx    = [];
    var lst    = this.props.lists;
    var lstLen = lst.length;
    for (var i = 0; i <= lstLen; i++) {
      if (i == lstLen) {
        jsx.push(
          <NavLink
            className       = "li-list"
            key             = {i}
            to              = {`/chart/其他`}
            activeClassName = "active"
          >
            其他
          </NavLink>
        );
      } else {
        jsx.push(
          <NavLink
            className       = "li-list"
            key             = {i}
            to              = {`/chart/${lst[i].dname}`}
            activeClassName = "active"
          >
            {lst[i].dname}
          </NavLink>
        );
      }
    }
    return jsx;
  };
  constructor() {
    super();
    this.state = {
      defaultImage: true
    };
  }
  changeImage() {
    this.setState({
      defaultImage: !this.state.defaultImage
    });
  }

  render() {
    var styleObj = {
      // backgroundImage: this.state.defaultImage ? `url(${Green})`: `url(${Red})`
    };
    var siteElements = [];
    // this.props.lists.forEach(item => {
    //   siteElements.push(
    //     <li className="content-li" key={item.did}>
    //       <Row>
    //         <Col xs="6">
    //           <Row>
    //             <Col xs="3">
    //               <span className="ask">问</span>
    //             </Col>
    //             <Col xs="9">
    //               <h4 className="ask-h4">{item.dname}</h4>
    //             </Col>
    //           </Row>
    //         </Col>
    //         <Col xs="6">
    //           <ul className="dz">
    //             <li
    //               className = "dz-list"
    //               // style     = {styleObj}
    //               onClick = {this.changeImage.bind(this)}
    //             />
    //             <li>
    //               <i>123</i>
    //               个赞
    //             </li>
    //           </ul>
    //         </Col>
    //       </Row>
    //       <Row>
    //         <Col xs="2">
    //           <span className="ask">
    //             <img src="" />
    //           </span>
    //         </Col>
    //         <Col xs="10">
    //           <div>
    //             <h4>刘医生</h4>
    //             <span>副主任医师 骨科 宁夏大学附属医院 已帮助710人</span>
    //           </div>
    //           <span>asdasdasdasd</span>
    //         </Col>
    //       </Row>
    //     </li>
    //   );
    // });
    return (
      <div className="mains">
        <div className="mains-search">
          <div className="search">
            <h3>科室</h3>
            <ul className="ul-list">
              <NavLink
                className       = "li-list"
                to              = "/chart/不限"
                activeClassName = "active"
              >
                不限
              </NavLink>
              {this.showList()}
            </ul>
          </div>
          <div className="content">
            <h3>科室</h3>
            <ul className="content-ul">
              {/* <li className="content-li">
                <Row>
                  <Col xs="6">
                    <Row>
                      <Col xs="3">
                        <span className="ask">问</span>
                      </Col>
                      <Col xs="9">
                        <h4 className="ask-h4">请问轻度脆骨病怎么治疗</h4>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="6">
                    <ul className="dz">
                      <li
                        className = "dz-list"
                        style     = {styleObj}
                        onClick   = {this.changeImage.bind(this)}
                      />
                      <li>
                        <i>123</i>
                        个赞
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <Col xs="2">
                    <span className="ask">
                      <img
                        src = {require("../../../assets/images/3276705971938115659-22.jpg")}
                      />
                    </span>
                  </Col>
                  <Col xs="10">
                    <div>
                      <h4>刘医生</h4>
                      <span>副主任医师 骨科 宁夏大学附属医院 已帮助710人</span>
                    </div>
                    <span>asdasdasdasd</span>
                  </Col>
                </Row>
              </li> */}
              {siteElements}
            </ul>
          </div>
        </div>
        <div className="doctors">
          <div className="doctor-list">
            <div className="picture">
              <img src="" />
            </div>
            <div className="list-name">
              <h4>胡医生 主治医生</h4>
              <h6>asdasd</h6>
            </div>
          </div>
          <div className="doctor-list">
            <div className="picture">
              <img src="" />
            </div>
            <div className="list-name">
              <h4>胡医生 主治医生</h4>
              <h6>asdasd</h6>
            </div>
          </div>
          <div className="doctor-list">
            <div className="picture">
              <img src="" />
            </div>
            <div className="list-name">
              <h4>胡医生 主治医生</h4>
              <h6>asdasd</h6>
            </div>
          </div>
          <div className="doctor-list">
            <div className="picture">
              <img src="" />
            </div>
            <div className="list-name">
              <h4>胡医生 主治医生</h4>
              <h6>asdasd</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  { increase, fetchList }
)(Chart);
