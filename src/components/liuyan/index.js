import React, { Component } from 'react';
import Axios from 'axios';

import BraftEditor from 'braft-editor';
import { ContentUtils } from 'braft-utils';
import 'braft-editor/dist/index.css';
import { NavLink } from 'react-router-dom';
import './Liuyan.scss';

// import { replayAjax } from '../../actions/counter';
// import { connect } from 'react-redux';

// const mapStateToProps = state => {
//   return Object.assign(state, { hosreducer: { replaylist: state.hosreducer.list } });
// };

export default class Liuyan extends Component {
  constructor(props) {
    super(props);
    this.state = { articl: [] };
  }
  componentWillMount() {
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
              <span className="xgwz-link">{data[i].title}</span>
            </li>
          );
        }
      }
      this.setState({
        articl: articlList
      });
      // console.log(this.state.articl);
    });
  }
  articlClick(a) {
    // console.log(a);
    let url = `/home/article/detail/cid=${a}&topic=gaoxueyaDetail`;
    // this.toDoctor(this);
    this.props.history.push(url);
  }

  //获取发表的言论并准备发送到服务器端。

  render() {
    console.log(this.state.articl);
    return (
      // 留言部分
      <div className="liuyan-box">
        <div className="container chart-liuyan c-ly-main">
          <div className="row ">
            {/* 主体内容左半部分 */}
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 c-ly-left align-self-start">
              {/* 顶部问题部分 */}
              <div className="row justify-content-between c-ly-left-top1">
                <div>
                  <span className="ly-wen">问</span>
                  <span className="question-title">
                    {' '}
                    请问轻度脆骨病怎么治疗{' '}
                  </span>
                </div>
                <img
                  src = {require('../../../assets/images/cgal-2-img15.png')}
                  alt = "健康"
                />
              </div>

              {/* 医生回答帮助 */}
              <div className="row c-ly-left-top2">
                <div className="col-1">
                  <img
                    src = {require('../../../assets/images/icon-liuyan/u34.jpg')}
                    alt = "头像"
                  />
                </div>
                <div className="col-11">
                  <div className="row">
                    <span className="doc-name"> 刘列医生 </span>
                    <span className="doc-type"> 副主任医师 </span>
                    <span className="doc-keshi"> 骨科 </span>
                    <span className="doc-hos"> 宁夏医科大学总医院 </span>
                    {/* <span className="doc-help"> 已帮助 ** 人</span> */}
                  </div>
                  <p className="row">
                    八零八零八零八不赖不赖不赖不赖八零八零八零八不赖不赖不赖不赖八零八零八,赖不赖不赖八零八零八零八不赖不赖,赖不赖不赖八零八零八零八不赖不赖,赖不赖不赖八零八零八零八不赖不赖
                  </p>
                </div>
              </div>

              {/* 评论留言和条数展示 */}
              <div className="row c-ly-left-mid1 justify-content-between">
                <span>评论留言</span>
                <span>共 {'**'} 条</span>
              </div>

              {/* 发表留言 */}
              <div className="row c-ly-left-mid2 ">
                <div className="col-10">
                  {/* <textarea name="ly" id="liuyan-hf" rows="10" col="80" placeholder="说说你的看法，3-500字"></textarea> */}
                  <MyEditor
                    className = "textarea"
                    ref       = {instance => (this.editorInstance = instance)}
                  />
                </div>
                <div className="col-2">
                  {/* 点击发布留言  尚未添加事件*/}
                  {/* <button onClick={this.fabiao} >发表</button> */}
                </div>

                <div className="col-12 ly-bq">
                  <hr />
                </div>
              </div>

              {/* 该问题的所有回复排序 */}
              <div className="row c-ly-left-mid3">
                <div className="col-12">
                  <span className="sort-zan">按点赞 </span> |
                  <span className="sort-time"> 按时间</span>
                </div>
              </div>
              {/* 该问题的所有回复内容 */}
              <Replay />

              {/* 底部可能感兴趣的 */}
              <div className="c-ly-left-footer row">
                <h4 className="col-12">您可能感兴趣的</h4>
                <NavLink to="/home/article" className="col-3 footer-4">
                  <img
                    src = {require('../../../assets/images/icon-liuyan/ucbegso8.jpg')}
                    alt = "食物"
                  />
                  <p>
                    巴拉巴拉吧，巴拉巴拉吧，巴拉巴拉吧，巴拉巴拉吧，巴拉巴拉吧，巴拉巴拉吧
                  </p>
                </NavLink>
                <NavLink to="/home/article" className="col-3 footer-4">
                  <img
                    src = {require('../../../assets/images/icon-liuyan/ucbegso8.jpg')}
                    alt = "食物"
                  />
                  <p>
                    巴拉巴拉吧，巴拉巴拉吧，巴拉巴拉吧，巴拉巴拉吧，巴拉巴拉吧，巴拉巴拉吧
                  </p>
                </NavLink>
                <NavLink to="/home/article" className="col-3 footer-4">
                  <img
                    src = {require('../../../assets/images/icon-liuyan/ucbegso8.jpg')}
                    alt = "食物"
                  />
                  <p>
                    巴拉巴拉吧，巴拉巴拉吧，巴拉巴拉吧，巴拉巴拉吧，巴拉巴拉吧，巴拉巴拉吧
                  </p>
                </NavLink>
                <NavLink to="/home/article" className="col-3 footer-4">
                  <img
                    src = {require('../../../assets/images/icon-liuyan/ucbegso8.jpg')}
                    alt = "食物"
                  />
                  <p>
                    巴拉巴拉吧，巴拉巴拉吧，巴拉巴拉吧，巴拉巴拉吧，巴拉巴拉吧，巴拉巴拉吧
                  </p>
                </NavLink>
              </div>
            </div>

            {/* 主体内容右半部分 */}
            <div className="col-lg-3 col-md-3 hidden-sm hidden-xs c-ly-right d-none d-md-block align-self-start">
              <div className="row justify-content-start c-ly-r-top">
                <strong>相关文章</strong>
                {/* <a href="#" className="xgwz-more">更多 &gt;</a> */}
              </div>
              <div className="row">
                <ul>{this.state.articl}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// 生成回复列表
class Replay extends Component {
  render() {
    return (
      <div>
        <div className="row ly-left-replay">
          <div className="col-1">
            {/* <img src="../../../assets/images/icon-liuyan/3302838893724077580-22.jpg" alt="头像" className="replay-tx " /> */}
          </div>
          <div className="col-8 re-msg">
            <h4 className="replay-name">医生姓名</h4>
            <p className="replay-nr">回复内容</p>
            <span className="replay-time">2018-10-31</span>
          </div>
          <div className="col-2 align-self-center replay-zan-box">
            <span className="replay-zan">赞 </span>
            (数量)
          </div>
        </div>
        <hr className="replay-hr" />
      </div>
    );
  }
}

//富文本编辑器 draft-js
class MyEditor extends React.Component {
  state = {
    editorState: BraftEditor.createEditorState(null)
  };

  handleChange = editorState => {
    this.setState({ editorState });
  };

  // insertHello = () => {
  //   this.setState({
  //     editorState: ContentUtils.insertText(this.state.editorState, '你好啊！')
  //   })
  // }
  fabiao = () => {
    console.log('aaa');
    // var cont=this.editorInstance.getContent();
    console.log(this.state.editorState.toText());
  };
  render() {
    const { editorState } = this.state;
    const controls        = [
      {
        key  : 'emoji',                                                         // 使用key来指定控件类型
        title: '添加表情',                                                          // 自定义控件title
        text : <img src="../../../assets/images/icon-liuyan/Expression.png" />  // 使用自定义文案来代替默认图标(B)，此处也可传入jsx
      }
    ];

    return (
      <div className="editor-wrapper">
        <BraftEditor
          value        = {editorState}
          onChange     = {this.handleChange}
          controls     = {controls}
          contentStyle = {{ height: 200 }}
          placeholder  = "说说你的看法"
        />
        <button onClick={this.fabiao} className="fabiao">
          发表
        </button>
      </div>
    );
  }
}

//将state和actions转化为props

// export default Introduce = connect(
//   mapStateToProps,
//   { replayAjax }
// )(Introduce);
