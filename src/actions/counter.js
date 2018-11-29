import axios from 'axios';
export const increase = () => {
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
    type: 'hosAjax',
    data
  };
};
export function hosAjax() {
  return dispatch => {
    var url = `http://47.92.98.104:8080:3000/doctor`;
    return axios({
      url   : url,
      method: 'post',
      data:"杭州第一人民医院"
    }).then(res => {
      console.log("发送了ajax请求",res);
      dispatch(getdoctorlist(res));
    });
  };
}