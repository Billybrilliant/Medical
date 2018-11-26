import React,{Component} from 'react';

export default class User extends Component{
 render(){
  return (
      <div>
          <h3>实名认证</h3>
          <form>
            <dl>
                <dt>真实姓名：</dt>
                <dd><input   placeholder="请输入您的姓名"/></dd>
            </dl>
            <dl>
                <dt>身份证号：</dt>
                <dd><input   placeholder="请输入您的身份证号码"/></dd>
            </dl>
            <dl>
                <dt>银行卡号：</dt>
                <dd><input   placeholder="请输入您的银行卡号"/></dd>
            </dl>
            <dl>
                <dt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;民族:&nbsp;&nbsp;&nbsp;</dt>
                <dd>
                    <select name="MinZu">
                    <option value="请输入" >请输入</option>
                    <option value="汉族" >汉族</option> 
                    </select>
                 </dd>
            </dl>
            <dl>
                <dt>电话号码：</dt>
                <dd><input   placeholder="请输入您的电话号码"/></dd>
            </dl>
            <dl>
              <span>  
                  &nbsp;&nbsp;&nbsp;&nbsp;温馨提示：完善实名信息将有利于保护您的个人信息安全，<br/>
                并为快速挂号提供有利支撑，避免由于个人信息不完整造成<br/>
                无法挂号。
                </span><br/>
                <button  value="提交">提交</button>
            </dl>
           
            
          </form>
      </div>
  )
   }
}