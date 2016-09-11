import React from 'react';
import store from '../store';

export default class Habits  extends React.Component{
    componentWillMount(){
        store.dispatch({type:'UPDATETITLE', title: 'Habits'});
    }
    render() {
        return (
            <h1>Habits</h1>
        );
    }
}
