import axios from 'axios';
export const hospital = () => {
  return {
    type: 'INCREASE'
  };
};
export const decrease = () => {
  return {
    type: 'DECREASE'
  };
};

export function fetchList(params = { page: 1 }) {
  return dispatch => {
    var url = `http://47.92.98.104:8080:3000/people?_page=${params.page}&_limit=5`;
    return axios({
      url   : url,
      method: 'get'
    }).then(res => {
      console.log(res);
      dispatch(getListData(res.data));
    });
  };
}


//医院介绍部分  获取医生列表
export const getdoctorlist = data => {
  return {
    type: 'doclist',
    data
  };
};
export const hosAjax=(hospital)=> {
  return dispatch => {
    var url = `http://47.92.98.104:8080/jkwy/doctor`;
    axios({
      // headers: {'content-type': 'application/x-www-form-urlencoded'},
      url,
      method: 'POST',
      params:{
        'hospital':"北京市朝阳第一人民医院",
      }
    }).then(res => {
      // console.log("发送了ajax请求",res);
      dispatch(getdoctorlist(res.data));
    });
  };
}

// 医院介绍部分  获取医院信息
export const gethospitalmsg = data => {
  return {
    type: 'hospitalmsg',
    hosMsg:data
  };
};
export const hosMsgAjax=(hospital)=> {
  return dispatch => {
    var url = `http://47.92.98.104:8080/jkwy/SelectHospital`;
    axios({
      // headers: {'content-type': 'application/x-www-form-urlencoded'},
      url,
      method: 'POST',
      params:{
        'hospital':"北京市朝阳第一人民医院",
      }
    }).then(res => {
      console.log("发送了ajax请求",res);
      dispatch(gethospitalmsg(res.data));
    });
  };
}