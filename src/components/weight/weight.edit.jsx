import React from 'react';

import store from '../../store';
import moment from 'moment';

import './weight.edit.scss';

import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

const formatDate = (date) => {
    return moment(date).format('DD-MM-YYYY');
}

const updateDate = (undefined, date) => {
    store.dispatch({ type: 'EDITDATE', content: date });
}

const updateWeight = (text) => {
    const value = document.getElementById('weight-textfield').value;
    if (!isNaN(value)) {
        store.dispatch({ type: 'EDITWEIGHT', content: value });
    }
}

export default class DashboardEdit extends React.Component {
    componentWillMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({ date: store.getState().EditDate, weight: store.getState().EditWeight });
        })
        store.dispatch({ type: 'UPDATETITLE', title: 'Update Weight' });
        updateDate(undefined, new Date());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        return (
            <div id="weight-edit">
                <h5>Update Weight</h5>
                <div><DatePicker hintText="Date" value={this.state.date} formatDate={formatDate} onChange={updateDate}/></div>
                <div><TextField  id="weight-textfield" onChange={updateWeight} defaultValue={''} value={this.state.weight}/> kg</div>
            </div>
        )
    }
}
