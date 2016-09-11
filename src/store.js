import { createStore } from 'redux';

const title = (state = '', action)=>{
    switch (action.type){
        case 'UPDATETITLE':{
            return action.title;
        }
        default :
            return state;
    }
}

let store = createStore(title);

export default store;
