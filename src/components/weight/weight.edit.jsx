import React from 'react';

import store from '../../store';
import moment from 'moment';

import './weight.edit.scss';

import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

import formatDateForServer from '../../api/format/dateformat';

import weightApi from '../../api/weight';

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

export default class WeightEdit extends React.Component {
    componentWillMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({ date: store.getState().EditDate, weight: store.getState().EditWeight || '' });
        })
        store.dispatch({ type: 'UPDATETITLE', title: 'Update Weight' });
        const id = this.props.params.id;
        let action;
        const insert = () => weightApi.insert({ date: formatDateForServer(this.state.date), weight: Number(this.state.weight) });
        const update = () => weightApi.update(id, { date: formatDateForServer(this.state.date), weight: Number(this.state.weight) });
        if (id !== 'new') {
            action = update;
            weightApi.get(id).then(data => {
                updateDate(undefined, moment(data.date).toDate());

            });
        } else {
            action = insert;
            updateDate(undefined, new Date());
            store.dispatch({ type: 'EDITWEIGHT', content: '' });
        }
        store.dispatch({ type: 'SAVEHANDLER', action });
    }
    componentWillUnmount() {
        this.unsubscribe();
        store.dispatch({ type: 'SAVEHANDLER', action: undefined });
    }
    render() {
        return (
            <div id="weight-edit">
                <h5>Update Weight</h5>
                <div><DatePicker hintText="Date" value={this.state.date} formatDate={formatDate} onChange={updateDate} /></div>
                <div><TextField id="weight-textfield" onChange={updateWeight} value={this.state.weight} /> kg</div>
            </div>
        )
    }
}
