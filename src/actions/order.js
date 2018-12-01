import axios from 'axios';
export const getListData = data => {
  return {
    type: 'GETLISTS',
    data
  };
}
export function fetchList(a,b,c) {

  return dispatch => {
    var url = `http://47.92.98.104:8080/jkwy/order`;
    return axios({
      url: url,
      params:{a,b,c},
      method: 'post',
    }).then(res => {
      console.log('-->',res);
      dispatch(getListData(res.data));
    })
  }
}
export const getPageData = data => {
  return {
    type: 'GETPAGES',
    data
  };
}
export function fetchPageList(params = { page: 1 }) {
  return dispatch => {
    var url = `http://localhost:3000/showmedical?_page=${params.page}&_limit=8`;
    return axios({
      url: url,
      method: 'get',
    }).then(res => {
      dispatch(getPageData(res.data));
    })
  }
}
export const getLogin= data => {
  return {
    type: 'LOGIN',
    data
  };
}
