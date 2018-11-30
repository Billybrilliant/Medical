import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../../actions/counter';
import './detail.css';
import { Container, Row, Col } from 'reactstrap';

// const mapStateToProps = state => {
//   return {
//     lists: state.artical.lists,
//     cid  : state.artical.cid
//   };
// };

class ArticleDetail extends Component {
  componentWillMount() {
    {
      /* 接收参数 */
    }
  }

  // componentDidMount() {
  //   this.props.fetchList(this.props.cid);
  // }

  render() {
    // if (this.props.lists !== undefined) {
    //   const { lists } = this.props;
    //   console.log(lists.title);

    return (
      <Container className="bigContent">
        <Row>
          {/* 左边 */}
          <Col xs="9" className="leftContent">
            <h3>怎么吃才能长寿？来看看这群老人的饮食经验！</h3>
            <p>
              作者：<span>于仁文</span> 2017-10-21
            </p>
            <div>
              <img src="../../../static/images/details/zvdfklmw.jpg" />
            </div>
            <p>
              现在生活条件和医疗条件，不知道比三四十年前好了多少倍。却有很多老人感觉活得很累，甚至很痛苦，为什么？到底出现了什么问题？丁当特别咨询了中国人民解放军陆军总医院营养师于仁文。他对这事很有发言权。营养师于仁文主要负责中国人民解放军陆军总医院各类老年病、营养代谢慢性疾病、手术及放化疗后病人的膳食营养工作。除此之外，他还担任了北京营养师协会理事、中国烹饪协会专家委员、中国老年学会食品营养专业委员会委员、北京抗癌协会青年委员会委员。
            </p>
            <b>在2015年，他更是受命担任9。3阅兵抗战老兵方队的专职营养师。</b>
            <div>
              <img src="../../../static/images/details/utob.jpg" />
            </div>
            <p>
              在给老兵们的饮食调养期间，95岁的老八路跟于老师交流体会：现在生活条件这么好，不活到90岁，谁也别埋怨，只能怨自己。
            </p>
            <div>
              <img src="../../../static/images/details/vl8sy6ok.jpg" />
            </div>
            <p>
              CCTV专访的抗美援朝老兵伉俪，也受邀参加阅兵。战争年代几经生死，却在和平年代罹患癌症。但妥善的治疗，和平的心态，加上合理的饮食调理，让老人的身体状况还不错，并更加珍惜如今的每一天。
            </p>
            <div>
              <img src="../../../static/images/details/vl8sy6ok.jpg" />
            </div>
            <p>
              他觉得，中老年朋友的膳食，不是石材有多好多贵重，只要对普通的食物进行合理的搭配，做到营养均衡，就是你的菜！在与老兵们相处的个把月中，结合他对老兵们的交谈观察，以及20余年临床膳食工作经验，于老师发现，人临终前容易出现的主要问题有以下六个问题——消化系统问题或生活习惯原因，导致营养严重缺乏，骨折后长时间卧床导致上述问题
            </p>
          </Col>
          {/* 右边 */}
          <Col xs="3" id="rightDoctor">
            <div className="rightContent">
              <Row>
                <div id="docImg">
                  <img src="../../../static/images/details/tnnfzeob.jpg" />
                </div>
              </Row>
              <Row>
                <h5>于仁文</h5>
                <p>中国人民解放军陆军总医院 营养师</p>
                <hr />
                <h6>来问医生更多患者问题</h6>
                <p>
                  医生，你好，我女朋友嫌弃自己胸部小，看到市面上一些丰胸的产品就想买.....
                </p>
                <p>
                  你好，我本人20，体重186斤，身高164，从小一直胖到大前几年试过吃一些....
                </p>
                <p>求解：炒菜里大蒜变蓝究竟是好是坏？是加了醋的缘故吗？</p>
                <p>
                  请问，我想控制饮食怕体重增加，可是晚饭不敢少吃，因为少吃肉吃的清淡晚上就饿....
                </p>
                <p>
                  于医生您好，我想咨询一下：本人46岁，身高155，体重61公斤.....
                </p>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
// }

export default ArticleDetail;
// export default connect(
//   mapStateToProps,
//   { fetchList }
// )(Home);
