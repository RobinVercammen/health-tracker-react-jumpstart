import React from 'react';
import store from '../store';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import moment from 'moment';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const formatDate = (date) => {
    return moment(date).format('dddd DD MMMM');
}

const weightUrl = 'http://localhost:10010/weight';
const headers = new Headers({
    'x-user-id': 1
});

const options = {
    method: 'GET',
    headers
};

const floatingbuttonstyle = { position: 'absolute', bottom: 25, right: 10 };

export default class Weight extends React.Component {
    componentWillMount() {
        store.dispatch({ type: 'UPDATETITLE', title: 'Weight Overview' });


        this.setState({ tableData: [] });

        this.unsubscribe = store.subscribe(() => {
            var content = store.getState().weight;
            this.setState({ tableData: content });
        });

        fetch(weightUrl, options).then(reponse => {
            return reponse.json();
        }).then(json => {
            store.dispatch({ type: 'LOADWEIGHT', content: json });
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        let rows = [];
        let row1 = { width: '55%' };
        let row2 = { width: '25%' };
        let row3 = { width: '20%' };

        for (let index = 0; index < this.state.tableData.length; index++) {
            const entry = this.state.tableData[index];
            rows.push(
                <TableRow key={index}>
                    <TableRowColumn style={row1}>{formatDate(entry.date) }</TableRowColumn>
                    <TableRowColumn style={row2}>{entry.weight} Kg</TableRowColumn>
                    <TableRowColumn style={row3}>
                        <IconButton>
                            <Link to={`/weight/${entry.id}`}>
                                <FontIcon className="material-icons">more_vert</FontIcon>
                            </Link>
                        </IconButton>
                    </TableRowColumn>
                </TableRow>
            );
        }

        return (
            <div id="weight">
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn style={row1}>Date</TableHeaderColumn>
                            <TableHeaderColumn style={row2}>Weight</TableHeaderColumn>
                            <TableHeaderColumn style={row3}></TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {rows}
                    </TableBody>
                </Table>
                <Link to={'/weight/new'}>
                    <FloatingActionButton style={floatingbuttonstyle}>
                        <ContentAdd/>
                    </FloatingActionButton>
                </Link>
            </div>
        );
    }
}
