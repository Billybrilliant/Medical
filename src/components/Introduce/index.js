import React, { Component } from 'react';
import './Introduce.scss';
// import axios from 'axios';
// import store from '../../store/index';
import { hosAjax,hosMsgAjax } from '../../actions/counter';
import { connect } from 'react-redux';
// import {pure} from 'recompose';

const mapStateToProps = state => {
  return Object.assign(state, {
     hosreducer: {
       list: state.hosreducer.list,
       hospital:state.hosreducer.hospital
    },
    chart:{
      hostipal:state.chart.hospital
    }
   });
};


//医院介绍的主组建
class Introduce extends Component {
  componentWillMount() {
    this.props.hosAjax();
    // this.props.hosMsgAjax();

  }


  render() {
    // console.log("render时调用",this.props.hosreducer.list);
    return (
      <div className="introduce-box">
        <div className="container mcontain hospital-top ">
          <h2>{"复旦大学附属华山医院-传染科"}</h2>
        </div>
        <div className="container mcontain hospital-top2">
          <p>
            <img
              src       = "../../../assets/images/icon-hospital/address.png"
              alt       = "地址"
            />{' '}
            <span>地址 上海市乌鲁木齐中路12号</span>
            <br />
            <img
              src       = "../../../assets/images/icon-hospital/phone.png"
              alt       = "地址"
            />{' '}
            <span>电话 021-52889999</span>
            <br />
            <img
              src       = "../../../assets/images/icon-hospital/introduce.png"
              alt       = "地址"
            />{' '}
            <span>
              简介
              复旦大学附属华山医院创建于1907年，是复旦大学附属综合性教学医院和中国红十字...{' '}
              {/* <a href="javascript;">查看详情</a> */}
            </span>
            <br />
          </p>
        </div>
        <div className="container mcontain hospital-mid">
          <img src="../../../assets/images/icon-hospital/doctor.png" alt="" />
          <div className="h-mid-r">
            <h2>科室专家</h2>
            <input type="text" placeholder="查找专家" disabled />
          </div>
        </div>

        <Tab list={this.props.hosreducer.list} />
        <div className="container  hospital-footer">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src = "('../../assets/images/icon-hospital/notice.png"
                alt = "就诊须知"
              />
              <h2>就诊须知</h2>
            </div>
          </div>
          <div className="row h-footer-b">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <h2>就诊携带</h2>
              <p>
                身份证，社保卡（医保卡），就诊卡（如果有），病历本，过往病例，过往检查单
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <h2>就诊流程</h2>
              <p>
                身份证，社保卡（医保卡），就诊卡（如果有），病历本，过往病例，过往检查单
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <h2>门诊检查</h2>
              <p>
                身份证，社保卡（医保卡），就诊卡（如果有），病历本，过往病例，过往检查单
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <h2>打针/取药</h2>
              <p>
                身份证，社保卡（医保卡），就诊卡（如果有），病历本，过往病例，过往检查单
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Tab extends Component {
  render() {
    console.log('Tab函数调用', this.props);
    return (
      <div className="container  hospital-mid2 ">
        <div className="row h-mid-nr-box">
          {this.props.list
            ? this.props.list.map((data, index) => {
                return (
                  <div
                    className = "h-mid2-nr col-xs-12 col-sm-6 col-md-4 col-lg-4"
                    key       = {index}
                  >
                    <span className="intro-dname">{data.dname}</span>
                    <span className="intro-dlevel">{data.level}</span>
                    <p className="intro-dape">擅长 ：{data.apecial}</p>
                  </div>
                );
              })
            : ''}
        </div>
        <div className="mpage">
          <button>上一页</button>
          <span>1 / 1</span>
          <button>下一页</button>
        </div>
      </div>
    );
  }
}

// Introduce=pure(Introduce);

export default Introduce = connect(
  mapStateToProps,
  { hosAjax,hosMsgAjax }
)(Introduce);
