import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Chart.css'
import { connect } from 'react-redux'
import { fetchList, famous } from '../../../actions/counter'
import Red from '../../../../assets/images/Red.png'
import Green from '../../../../assets/images/Green.png'
const mapStateToProps = state => {
  // console.log(state.chart.lists.section)
  // console.log(state.chart.lists.MasterAndFollow)
  return {
    lists : state.chart.lists.section,
    follow: state.chart.lists.MasterAndFollow
  }
}
class Chart extends Component {
  componentDidMount() {
    this.props.fetchList()
  }
  showList = () => {
    var jsx    = []
    var lst    = this.props.lists
    var lstLen = lst.length
    for (var i = 0; i <= lstLen; i++) {
      if (i == lstLen) {
        jsx.push(
          <NavLink
            className       = "li-list"
            key             = {i}
            to              = {`/home/chart/其他`}
            activeClassName = "active"
          >
            其他
          </NavLink>
        )
      } else {
        jsx.push(
          <NavLink
            className       = "li-list"
            key             = {i}
            to              = {`/home/chart/${lst[i].sid}`}
            activeClassName = "active"
            onClick         = {this.props.fetchList.bind(this,this.props.msg)}
          >
            {lst[i].section}
          </NavLink>
        )
      }
    }
    return jsx
  }
  constructor() {
    super()
    this.state = {
      defaultImage: true
    }
  }
  changeImage() {
    this.setState({
      defaultImage: !this.state.defaultImage
    })
  }

  render() {
    var styleObj = {
      backgroundImage: this.state.defaultImage ? `url(${Green})`: `url(${Red})`
    }
    var siteElements = []
    this.props.follow.forEach(item => {
      siteElements.push(
        <li className="content-li" key={item.tid}>
          <Row>
            <Col xs="6">
              <Row>
                <Col xs="3">
                  <span className="ask">问</span>
                </Col>
                <Col xs="9">
                  <h3 className="ask-h4" className="conner">{item.tContents}</h3>
                </Col>
              </Row>
            </Col>
            <Col xs="6">
              <ul className="dz">
                <li
                  ref       = "listss"
                  className = "dz-list"
                  style     = {styleObj}
                  onClick   = {this.changeImage.bind(this)}
                />
                <li>
                  <i>{item.tClickCount}</i>
                  个赞
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs="2">
              <span className="ask">
                <img src={require('../../../../assets/images/Green (1).jpg')} />
              </span>
            </Col>
            <Col xs="10" className="conner">
              <div>
                <h4>刘医生</h4>
                <span>副主任医师 骨科 宁夏大学附属医院 已帮助710人</span>
              </div>
              <NavLink  to={`/home/liuyan/${item.tid}`} >
                {item.tContents}
              </NavLink>
            </Col>
          </Row>
        </li>
      )
    })
    return (
      <div className="mains">
        <div className="mains-search">
          <div className="search">
            <h3>科室</h3>
            <ul className="ul-list">
              <NavLink
                className       = "li-list"
                to              = "/home/chart/不限"
                activeClassName = "active"
              >
                不限
              </NavLink>
              {this.showList()}
            </ul>
          </div>
          <div className="content">
            <h3>科室</h3>
            <ul className="content-ul">{siteElements}</ul>
          </div>
        </div>
        <div className="doctors">
          <div className="doctor-list">
            <div className="picture">
              <img src={require('../../../../assets/images/Green (1).jpg')} />
            </div>
            <div className="list-name">
              <h4>胡医生 主治医生</h4>
              <h6>杭州市第一人民医院</h6>
            </div>
          </div>
          <div className="doctor-list">
            <div className="picture">
              <img src={require('../../../../assets/images/Green (1).jpg')} />
            </div>
            <div className="list-name">
              <h4>胡医生 主治医生</h4>
              <h6>杭州市第一人民医院</h6>
            </div>
          </div>
          <div className="doctor-list">
            <div className="picture">
              <img src={require('../../../../assets/images/Green (1).jpg')} />
            </div>
            <div className="list-name">
              <h4>胡医生 主治医生</h4>
              <h6>杭州市第一人民医院</h6>
            </div>
          </div>
          <div className="doctor-list">
            <div className="picture">
              <img src={require('../../../../assets/images/Green (1).jpg')} />
            </div>
            <div className="list-name">
              <h4>胡医生 主治医生</h4>
              <h6>杭州市第一人民医院</h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  mapStateToProps,
  { fetchList }
)(Chart)
