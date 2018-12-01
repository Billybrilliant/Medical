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

export function fetchList(params={page:'xz101'}) {
  return dispatch => {
    var url = `http://47.92.98.104:8080/jkwy/IndexServlet?sid=${params.page}&currentpage=1&pagesize=5`;
    return axios({
      url   : url,
      method: 'get'
    }).then(res => {
      // console.log(res);
      dispatch(getListData(res.data));
    });
  };
}

export const  getListData= data => {
  return {
    type: 'GETLISTS',
    data
  };
};

//医院介绍部分  获取医生列表
export const getdoctorlist = data => {
  return {
    type: 'doclist',
    data
  };
};
export const hosAjax=(hospital)=> {
  return dispatch => {
<<<<<<< HEAD
    var url = `http://47.92.98.104:8080:3000/doctor`;
    return axios({
      url   : url,
      method: 'post',
      data  : "杭州第一人民医院"
=======
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
>>>>>>> c4bf4ddbb7c6998c1a3a1668a2df30fed1a97e9b
    }).then(res => {
      console.log("发送了ajax请求",res);
      dispatch(gethospitalmsg(res.data));
    });
  };
}

//
export function famous() {
  return dispatch => {
    var url = `http://47.92.98.104:8080/jkwy/famousdoctor`;
    return axios({
      url   : url,
      method: 'get'
    }).then(res => {
      console.log(res);
      dispatch(getListData(res.data));
    });
  };
}