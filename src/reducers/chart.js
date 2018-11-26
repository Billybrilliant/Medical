function chart(
  state = {
    count: '不限',
    lists: [{ did: null, dname: null, dpwd: null, Sex: null }]
  },
  action
) {
  switch (action.type) {
    case 'GETLISTS': 
      return { ...state, lists: action.data };
    default: 
      return state;
  }
}
export default chart;
