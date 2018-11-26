import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import './Login.scss';
const mapStateToProps = state => {
    return {
     loginin: state.order.login
    };
  };
class Login extends Component {

constructor(props) {
    super(props);
    this.state = {userName:"",password:""};
 }
componentDidMount(){

}
// checkLogin= (state, payload) => {
//     state.login = payload
// }
// setToken=(state, payload) => {
//     state.token = payload
// }
handleSubmit=(event) =>{
    event.preventDefault();
    if(this.state.userName==""||this.state.password==""){
        alert('用户名或密码不能为空');
    }else{
        var {userName,password}=this.state;

        axios({
            url:'http://localhost:3000/user/login',
            method:'post',
            data:{
                uname:userName,
                phone:userName,
                upwd:password
            }
          }).then(res=>{

              if (res.data.token) {

                alert('恭喜你登录成功！');
                this.setState({ loginin: true });
                location.href="http://localhost:8080/#/Home";
              }else{
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
                    <input type="submit" value="登&nbsp;&nbsp;录" id="loginBtn"/><br/>

                </form>
                <div className="login-foo"><a href="#">&gt;立即注册</a></div>
            </div>



        </div>
    </div>)
}
}
export default connect(
    mapStateToProps
  )(Login);
