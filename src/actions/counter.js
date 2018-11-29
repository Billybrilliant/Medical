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
export const getListData = data => {
  return {
    type: 'GETLISTS',
    data
  };
};
export function fetchList(params = { page: 1 }) {
  return dispatch => {
    var url = `http://localhost:3000/people?_page=${params.page}&_limit=5`;
    return axios({
      url   : url,
      method: 'get'
    }).then(res => {
      console.log(res);
      dispatch(getListData(res.data));
    });
  };
}