var initalState = { lists: [{ no: null, hospital: null, dDate: null, keshi: null, patient: null, doctor: null, xdDate: null, dClass: null, isPay: null, payStyle: null, dCost: null }], pages: [],loginin:false };
function order(state = initalState, action) {
    switch (action.type) {
        case 'GETLISTS':
            return { ...state, lists: action.data };
        case 'GETPAGES':
            return { ...state, pages: action.data };
        case 'LONGIN':
            return { ...state, loginin: action.data };
        default:
            return state;
    }

}
export default order;
