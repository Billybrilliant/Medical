import React, { Component } from 'react';
import './i-doc.scss';
import { NavLink } from 'react-router-dom';

export default class IntroduceD extends Component {
  render() {
    return (
      <div className="introduceD-box">
        {/* 顶部医生信息介绍 */}
        <div className="container idoc-top">
          <div className="row align-items-center">
            <div className="col-2">
              <img
                className = "doc-touxiang"
                src       = {require('../../../assets/images/icon-liuyan/u34.jpg')}
                alt       = "医生"
              />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 col-xs-6 top-center">
              <h2>医生姓名</h2>
              <span>科室</span> <span> 医生类型</span>
              <p>所属医院</p>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12 text-center  offset-lg-3 ">
              <NavLink to="/home/introduced/question" className="mbtn">
                提问
              </NavLink>
              {/* <NavLink to="/"><span className="mbtn">提问</span></NavLink> */}
              {/* <span className="mbtn">关注</span> */}
            </div>
          </div>
        </div>

        {/* 从业年限与评价部分 */}
        <div className="idoc-mid container text-center">
          <div className="row">
            <div className="col-4">
              <p>从业年限</p>
              <p>
                <span>2 </span>年
              </p>
            </div>
            <div className="col-4">
              <p>回答次数</p>
              <p>
                <span>496 </span>次
              </p>
            </div>
            <div className="col-4 star">
              <p>⭐⭐⭐⭐⭐</p>
              <span>
                <strong>5.0 </strong>分
              </span>
            </div>
          </div>
        </div>

        {/* 个人简介部分 */}
        <div className="container idoc-jianjie">
          <h2>个人简介</h2>

          <p>2005-2016 于西安交通大学攻读并获得临床医学本科、硕士、博士学位 </p>

          <h2>执业经历</h2>

          <p>
            2016年毕业西安交通大学，获得临床医学博士学位，同年工作于西安交通大学第二附属医院骨科至今
          </p>
        </div>

        {/* 医院信息部分 */}
        <div className="container idoc-hosmsg">
          <div className="row">
            <h2>医院信息</h2>
          </div>
          <div className="row">
            <img
              src = {require('../../../assets/images/icon-idoc/hospital.png')}
              alt = "医院"
            />
            <p>西安交通大学医学院第二附属医院</p>
          </div>
          <div className="row">
            <img
              src = {require('../../../assets/images/icon-idoc/phone.png')}
              alt = "电话"
            />
            <p>联系电话：029-86868686</p>
          </div>
          <div className="row">
            <img
              src = {require('../../../assets/images/icon-idoc/address.png')}
              alt = "地址"
            />
            <p>陕西省西安市西五路157号</p>
          </div>
        </div>

        {/* 预约挂号部分 */}
        <div className="container idoc-yuyue">
          <div className="row">
            <h2>预约挂号</h2>
          </div>
          <div className="row">
            <h3>科 室</h3>
            <p className="yuyue-keshi">骨科</p>
          </div>
          <div className="row">
            <h3>排 班</h3>
            <div className="yuyue-time">
              <table className="text-center">
                <tbody>
                  <tr>
                    <td className="tab-first" width="80px">
                      日期
                    </td>
                    <td className="yuyue-week">周一</td>
                    <td className="yuyue-week">周二</td>
                    <td className="yuyue-week">周三</td>
                    <td className="yuyue-week">周四</td>
                    <td className="yuyue-week">周五</td>
                    <td className="yuyue-week">周六</td>
                    <td className="yuyue-week">周日</td>
                  </tr>
                  <tr className="tab-tr">
                    <td className="day-time">上午</td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                  </tr>
                  <tr className="tab-tr">
                    <td className="day-time">下午</td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                  </tr>
                  <tr className="tab-tr">
                    <td className="day-time">晚上</td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                    <td>
                      {' '}
                      <NavLink to="/home/yuyueliuchen" className="mbtn">
                        提问
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
