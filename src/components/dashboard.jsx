import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './dashboard.scss';
import store from '../store';
import dashboardApi from '../api/dashboard';

export default class Dashboard extends React.Component {
    componentWillMount() {
        store.dispatch({ type: 'UPDATETITLE', title: 'Your dashboard' });
        this.unsubscribe = store.subscribe(() => {
            const dashboard = store.getState().dashboard;
            this.setState(dashboard);
        });

        this.setState({
            habits: [],
            weight: {},
            calories: {}
        });

        dashboardApi.getAll().then(json => {
            store.dispatch({ type: 'LOADDASHBOARD', content: json });
        });

    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        let rows = [];
        for (let i = 0; i < this.state.habits.length; i++) {
            let habit = this.state.habits[i];
            rows.push(
                <div key={habit.name}>
                    <h5>{habit.name}</h5>
                    <p>Current streak: {habit.streak}days    -   Success: {habit.streak}/60 days</p>
                </div>
            );
        }

        return (
            <div id="dashboard">
                <h4><i className="material-icons">straighten</i> Weight</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>Goal: </td>
                            <td>{this.state.weight.goal}Kg</td>
                        </tr>
                        <tr>
                            <td>Current: </td>
                            <td>{this.state.weight.current}Kg</td>
                        </tr>
                        <tr>
                            <td>Best: </td>
                            <td>{this.state.weight.best}Kg</td>
                        </tr>
                    </tbody>
                </table>
                <h4><i className="material-icons">favorite</i> Calories</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>Goal: </td>
                            <td>{this.state.calories.goal}calories</td>
                        </tr>
                        <tr>
                            <td>Last: </td>
                            <td>{this.state.calories.last}calories</td>
                        </tr>
                        <tr>
                            <td>Average: </td>
                            <td>{this.state.calories.avg}calories</td>
                        </tr>
                    </tbody>
                </table>
                <h4><i className="material-icons">navigation</i> Habits</h4>
                {rows}
                <div>
                    <RaisedButton label="Daily update" primary={true} />
                </div>
            </div>
        );
    }
}
