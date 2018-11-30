import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import './Login.scss';
// import store from '../../store';
import {getLogin} from '../../actions';
const mapStateToProps = state => {
    return {
     loginin: state.order.login
    };
  };
class Login extends Component {

constructor(props) {
    super(props);
    this.state = {userName:"",password:"",utype:''};
 }
componentDidMount(){
// console.log('login组件--->',store.getState());
}

handleSubmit=(event) =>{
    var a=$('#select').val();
    this.setState({utype:a});
    event.preventDefault();

    const {userName,password}=this.state;
    if(this.state.userName==""||this.state.password==""){
        alert('用户名或密码不能为空');
    }else{
        axios({
            url:'http://47.92.98.104:8080/jkwy/login',
            method:'post',
           params:{
                phone:userName,
                upwd:password,
                utype:1
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }

          }).then(res=>{

                console.log(res.data);
                if(res.data.msg=="1"){
                    alert('恭喜你登录成功！');
                    this.props.getLogin({ loginin: true });

                    this.props.history.push('/');
                }else if(res.data.msg=="0"){
                alert('用户名或密码错误！或 用户不存在');

                }
          })
    }

}
usernameChange=(event)=>{
    this.setState({userName: event.target.value});
}
passwordChange=(event)=>{
    this.setState({password: event.target.value});
}
render() {
return (<div className="Login">
        <div id="login">

            <div id="formLogin">
                <h5>账户登录</h5>
                <form  onSubmit={this.handleSubmit}>
                    <input type="text" id="userName" placeholder="手机号/用户名/邮箱" value={this.state.userName} onChange={this.usernameChange}/><br/>
                    <input type="password" id="userpwd" placeholder="密码" value={this.state.password}  onChange={this.passwordChange} /><br/>
                    <select id="select">
                            <option value ="1">普通用户</option>
                            <option value ="2">管理员</option>
                    </select>


                    <input type="submit" value="登&nbsp;&nbsp;录" id="loginBtn"/><br/>

                </form>
                <div className="login-foo"><a href="javascript:;">&gt;立即注册</a></div>
            </div>



        </div>
    </div>)
}
}
export default connect(
    mapStateToProps,{getLogin}
  )(Login);
