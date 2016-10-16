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
        case 'EDITDATE': {
            return Object.assign({}, state, { EditDate: action.content });
        }
        case 'EDITWEIGHT': {
            return Object.assign({}, state, { EditWeight: action.content });
        }
        case 'SAVEHANDLER': {
            return Object.assign({}, state, { save: action.action });
        }
        default:
            return state;
    }
}

let store = createStore(applicationStore);

export default store;
