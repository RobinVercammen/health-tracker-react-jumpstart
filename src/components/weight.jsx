import React from 'react';
import store from '../store';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const dummyData = [
    {
        key: 1,
        date: new Date().toISOString(),
        weight: 70
    },
    {
        key: 2,
        date: new Date().toISOString(),
        weight: 75
    },
    {
        key: 3,
        date: new Date().toISOString(),
        weight: 65
    }
]


export default class Weight extends React.Component {
    componentWillMount() {
        store.dispatch({ type: 'UPDATETITLE', title: 'Weight Overview' });
        this.setState({ tableData: dummyData });
    }
    render() {
        let rows = [];
        for (let index = 0; index < this.state.tableData.length; index++) {
            rows.push(
                <TableRow>
                    <TableRowColumn>{this.state.tableData[index].date}</TableRowColumn>
                    <TableRowColumn>{this.state.tableData[index].weight}</TableRowColumn>
                    <TableRowColumn></TableRowColumn>
                </TableRow>
            );
        }

        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Date</TableHeaderColumn>
                        <TableHeaderColumn>Weight</TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows}
                </TableBody>
            </Table>

        );
    }
}
