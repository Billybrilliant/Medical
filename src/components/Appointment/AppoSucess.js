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
    constructor(props) {
        super(props);
      this.state = {oid:"",did:"",uid:'',customer: ''};
     }

    componentDidMount() {
         //获取用户信息
            var userMessage = sessionStorage.getItem('user');
            var userEntry   = JSON.parse(userMessage);


        var arrs=this.props.history.location.search.split('?')[1].split('&');
        var obj = {};
        for(var i=0;i<arrs.length;i++){
            var obja=[]
            obja=arrs[i].split('=');
            obj[obja[0]]=obja[1];
        }

        this.props.fetchList(obj.uid,obj.oid,obj.did);
        this.setState({oid:obj.oid,did:obj.did,uid:obj.uid});
        this.setState({customer:userEntry});

    }
  render() {

        console.log('--------------->',this.state);

    const {lists}=this.props;
    return(
        <div>
            <div id="main-top">
                    <Container id="details">
                        <Row id="details-row1">
                            <Col  md={{ size: 6 }} >
                                <span  className="d-title">订单详情</span>
                                <NavLink href="#/home/personal">&lt;返回我的订单</NavLink>
                            </Col>
                        </Row>
                        <Row id="details-row2">
                            <Col  md={{ size: 6 }}>
                                <span>当前订单状态 ： </span>
                                <span id="d-status"></span>
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
                                <span id="d-no">{this.state.oid}</span>
                            </Col>
                        </Row>
                        <Row id="msg-row2">
                            <Col  md={{ size: 6 }}>
                                <span>预约医院 ： </span>
                                <span id="d-hosp">仁和医院</span>
                            </Col>
                            <Col  md={{ size: 6 }}>
                                <span>就诊日期 ： </span>
                                {/* <span id="d-time">{lists[0].time}</span> */}
                            </Col>
                        </Row>
                        <Row id="msg-row3">
                            <Col  md={{ size: 6 }}>
                                <span>预约科室 ： </span>
                                <span id="d-keshi">后台没写</span>
                            </Col>
                            <Col  md={{ size: 6 }}>
                                <span>就诊人 ： </span>
                                {/* <span id="d-patient">{lists[0].uname}</span> */}
                            </Col>
                        </Row>
                        <Row id="msg-row4">
                            <Col  md={{ size: 6 }}>
                                <span>预约医生 ： </span>
                                {/* <span id="d-doctor">{lists[0].dname}</span> */}
                            </Col>
                            <Col  md={{ size: 6 }}>
                                <span>下单时间 ： </span>
                                {/* <span id="d-dtime">{lists[0].date}</span> */}
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