import { createStore } from 'redux';

const mockedxhrcall = {
    weight: {
        goal: 58,
        current: 58.3,
        best: 57.9
    },
    calories: {
        goal: 1750,
        last: 1820,
        avg: 1788
    },
    habits: [
        {
            title: 'Drink at least one liter of water',
            streak: 23,
            goal: 60
        },
        {
            title: 'Eat two pieces of fruit',
            streak: 23,
            goal: 60
        },
        {
            title: 'Don\'t drink any kind of soda',
            streak: 23,
            goal: 60
        }
    ]
}

const applicationStore = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATETITLE': {
            return Object.assign({}, state, { applicationTitle: action.title });
        }
        case 'LOADDASHBOARD': {
            //make xhr call
            return Object.assign({}, state, { dashboard: mockedxhrcall });
        }
        default:
            return state;
    }
}

let store = createStore(applicationStore);

export default store;
