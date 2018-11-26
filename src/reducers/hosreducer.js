export default function hosreducer(state={list:null},actions){
    switch(actions.type){
        case 'hosreducer':
        console.log("调用了hosreducer",actions.data);
        return ({},state,{list:actions.data});
        default:
        return state;
    }
}