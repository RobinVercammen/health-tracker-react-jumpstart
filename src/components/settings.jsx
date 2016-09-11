import React from 'react';
import store from '../store';

export default class Settings  extends React.Component{
    componentWillMount(){
        store.dispatch({type:'UPDATETITLE', title: 'Settings'});
    }
    render() {
        return (
            <h1>Settings</h1>
        );
    }
}
