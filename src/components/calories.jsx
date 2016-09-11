import React from 'react';
import store from '../store';

export default class Calories  extends React.Component{
    componentWillMount(){
        store.dispatch({type:'UPDATETITLE', title: 'Calories'});
    }
    render() {
        return (
            <h1>Calories</h1>
        );
    }
}
