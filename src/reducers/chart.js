function chart(
  state = {count: "不限",lists: [{ did: null, dname: null, dpwd: null, Sex: null }],hospital:'无'},action) {
  switch (action.type) {
    case 'INCREASE': 

    return { ...state, hospital: state.hospital };
    case "GETLISTS":
      return { ...state, lists: action.data };
    default:
      return state;
  }
}
export default chart;
