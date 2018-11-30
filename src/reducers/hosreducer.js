export default function hosreducer(state={list:null,hopital:null},actions){
    switch(actions.type){
        case 'doclist':
        // console.log(actions);
        // console.log("调用了hosreducer",actions.data);
        return ({},state,{list:actions.data});
        case 'hospitalmsg':
        return ({},state,{hospital:actions.hosMsg});
        default:
        return state;
    }
}