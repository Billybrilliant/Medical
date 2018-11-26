import React, { Component } from 'react';
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
    Col
  } from 'reactstrap';
import {connect} from 'react-redux';
import {fetchList,getListData} from '../../actions';
import './AppoSuccess.css';
const mapStateToProps = state => {
    return {
      lists: state.order.lists
    };
  };

class AppoSuccess extends Component {
    componentDidMount() {
        this.props.fetchList();
    }


  render() {

    const {lists}=this.props;
    return(
        <div>
            <div id="main-top">
                    <Container id="details">
                        <Row id="details-row1">
                            <Col  md={{ size: 6 }} >
                                <span  className="d-title">订单详情</span>
                                <NavLink href="#/">&lt;返回我的订单</NavLink>
                            </Col>
                        </Row>
                        <Row id="details-row2">
                            <Col  md={{ size: 6 }}>
                                <span>当前订单状态 ： </span>
                                <span id="d-status">预约成功</span>
                            </Col>
                        </Row>
                        <Row id="details-row3">
                            <Col  md={{ size: 6 }}>
                                <span>恭喜您预约成功</span>
                            </Col>
                        </Row>
                    </Container>
            </div>
            <div id="main-mid">
                    <Container id="msg">
                        <Row id="msg-row1">
                            <Col  md={{ size: 6 }} >
                                <span className="d-title">订单信息</span>
                            </Col>
                            <Col  md={{ size: 6 }}  className="dd-no">
                                <span>订单编号:</span>
                                <span id="d-no">{lists[0].no}</span>
                            </Col>
                        </Row>
                        <Row id="msg-row2">
                            <Col  md={{ size: 6 }}>
                                <span>预约医院 ： </span>
                                <span id="d-hosp">{lists[0].hospital}</span>
                            </Col>
                            <Col  md={{ size: 6 }}>
                                <span>就诊日期 ： </span>
                                <span id="d-time">{lists[0].dDate}</span>
                            </Col>
                        </Row>
                        <Row id="msg-row3">
                            <Col  md={{ size: 6 }}>
                                <span>预约科室 ： </span>
                                <span id="d-keshi">{lists[0].keshi}</span>
                            </Col>
                            <Col  md={{ size: 6 }}>
                                <span>就诊人 ： </span>
                                <span id="d-patient">{lists[0].patient}</span>
                            </Col>
                        </Row>
                        <Row id="msg-row4">
                            <Col  md={{ size: 6 }}>
                                <span>预约医生 ： </span>
                                <span id="d-doctor">{lists[0].doctor}</span>
                            </Col>
                            <Col  md={{ size: 6 }}>
                                <span>下单时间 ： </span>
                                <span id="d-dtime">{lists[0].xdDate}</span>
                            </Col>
                        </Row>
                        <Row id="msg-row5">
                            <Col  md={{ size: 6 }}>
                                <span>门诊类型 ： </span>
                                <span id="d-doctorClass">{lists[0].dClass}</span>
                            </Col>
                            <Col  md={{ size: 6 }}>
                                <span>支付状态 ： </span>
                                <span id="d-isPay">未支付</span>
                            </Col>
                        </Row>
                        <Row id="msg-row6">
                            <Col  md={{ size: 6 }}>
                                <span>预约费用 ： </span>
                               <i><span id="d-cost">{lists[0].dCost}</span>元</i>
                            </Col>
                            <Col  md={{ size: 6 }}>
                                <span>支付方式： </span>
                                <span id="d-payStyle">{lists[0].payStyle}</span>
                            </Col>
                        </Row>
                    </Container>
            </div>
            <div id="main-btm">
                    <Container id="note">
                        <Row id="note-row1">
                            <Col  md={{ size: 6 }} >
                                <span className="d-title">就诊须知</span>
                            </Col>

                        </Row>
                        <Row id="note-row2">
                            <Col  >
                                <p>1.为了方便患者就诊，我院开通了网上预约挂号服务。</p>
                                <p>2.网上预约挂号不收取手续费（诊疗费用以医院现场收取为准！）。</p>
                                <p>3.为保证您准时就诊， 请于就诊当日按所预约时间段提前15分钟到门诊大厅区号</p>
                                <p>4.医生门诊资源有限，<span>如预约成功后因故确定不能按时就诊，请务必于就诊当日提前2小时取消预约，</span>否则按违约处理，累计三次，您将无法进行预约。</p>
                                <p>5.如果您预约的专家临时请假，我们会通过短信或者电话告知，请注意网上专家门诊停诊通知或进行电话咨询。</p>
                                <p>6.医生接诊速度受患者病情等诸多因素影响，实际就诊时间可能提前或准后，敬请知悉！</p>
                            </Col>

                        </Row>

                    </Container>
            </div>
        </div>
        )


  }
}
export default connect(
    mapStateToProps,
    {fetchList}
  )(AppoSuccess);