import React,{Component} from 'react';
import { Tabs } from 'antd';
import axios from 'axios';

import { Table, Divider, Tag } from 'antd';
const TabPane = Tabs.TabPane;

const columns = [{
    title: '序号',
    dataIndex: 'num',
    key: 'num',
    align:'center',
    render: text => <a href="javascript:;">{text}</a>,
  },
   {
    title: '医院',
    dataIndex: 'hospital',
    key: 'hospital',
    align:'center',
  }, {
    title: '科室',
    dataIndex: 'desk',
    key: 'desk',
    align:'center',
  }, {
    title: '医生',
    dataIndex: 'doctor',
    key: 'doctor',
    align:'center',
  }, {
    title: '就诊时间',
    dataIndex: 'time',
    key: 'time',
    align:'center',
  },{
    title: '状态',
    key: 'tags',
    dataIndex: 'tags',
    align:'center',
  }, {
    title: '操作',
    key: 'action',
    dataIndex: 'action',
    align:'center',

  }];
  
  
  



function callback(key) {
  // console.log(key);
}
export default class Gua extends Component{

  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount(){
    axios({
      url:'http://10.31.162.52:3000/product/list' ,
      method:'post',
     }).then(res=>{
        // console.log(res.data.rows)
       this.setState({list:res.data.rows})
      //  console.log(this.state.list[0].drugName)
     })
  }
  
  showList=()=>{
    if(this.state.list.length>0){ 
    var  List=[];
      for(let i=0 ; i<this.state.list.length; i++){
        List.push({
          key:i,
          num:1,
          hospital:this.state.list[i].drugName,
          desk:"儿科",
          doctor:4,
          time:5,
        })
      }
    }
    return List
  }





 render(){
  const data = this.showList();
  return(
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="预约挂号" key="1">
        
        <Table columns={columns} dataSource={data} bordered={true} size="small" size="middle" />
    </TabPane>
    <TabPane tab="今日挂号" key="2">Content of Tab Pane 2</TabPane>
  </Tabs>
  )
    
   }
}