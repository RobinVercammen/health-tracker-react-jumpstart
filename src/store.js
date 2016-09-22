import { createStore } from 'redux';



const applicationStore = (state, action) => {
    switch (action.type) {
        case 'UPDATETITLE': {
            return Object.assign({}, state, { applicationTitle: action.title });
        }
        case 'LOADDASHBOARD': {
            return Object.assign({}, state, { dashboard: action.content });
        }
        case 'LOADWEIGHT': {
            return Object.assign({}, state, { weight: action.content });
        }
        default:
            return state;
    }
}

let store = createStore(applicationStore);

export default store;
