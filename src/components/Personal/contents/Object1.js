import React,{Component} from 'react';
import { Tabs } from 'antd';
import { Input } from 'antd';

const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
  }

export default class Object1 extends Component{
 render(){
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="个人信息" key="1">
    <form>
        <dl>
          <dt>&nbsp;&nbsp;&nbsp;&nbsp;名称&nbsp;&nbsp;&nbsp;</dt>
          <dd><input   placeholder="请输入您的用户名"/></dd>
        </dl>
        <dl>
          <dt>真实姓名</dt>
          <dd><input   placeholder="请输入您的真实姓名"/></dd>
        </dl>
        <dl>
          <dt>身份证号</dt>
          <dd><input   placeholder="请输入您的身份证号"/></dd>
        </dl>
        <dl>
          <dt>手机号码</dt>
          <dd><input   placeholder="请输入您的手机号码"/></dd>
        </dl>
        <dl>
          <dt>常用邮箱</dt>
          <dd><input   placeholder="请输入您的邮箱"/></dd>
        </dl>
        <dl>
          <b>家庭住址&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
          <textarea></textarea> <br/><button>确认修改</button>
        </dl>
        
          
          
      
      </form>
    </TabPane>
    <TabPane tab="登陆密码修改" key="2">Content of Tab Pane 2</TabPane>
    <TabPane tab="头像修改" key="3">Content of Tab Pane 3</TabPane>
  </Tabs>
  )
   }
}
