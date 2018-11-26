import axios from 'axios';
export const getListData = data => {
  return {
    type: 'GETLISTS',
    data
  };
}
export function fetchList() {
  return dispatch => {
    var url = `http://localhost:3000/ordermsg`;
    return axios({
      url: url,
      method: 'get',
    }).then(res => {
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
