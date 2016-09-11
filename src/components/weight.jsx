import React from 'react';
import store from '../store';

export default class Weight extends React.Component {
    componentWillMount(){
        store.dispatch({type:'UPDATETITLE', title: 'Weight'});
    }
    render() {
        return (
            <h1>Weight</h1>
        );
    }
}
