import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './dashboard.scss';

const buttonStyle = {marginLeft: 'auto', marginRight:'auto'};

export default class Dashboard extends React.Component {
    render() {
        return (
            <div id="dashboard">
                <h4><i className="material-icons">straighten</i> Weight</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>Goal:</td>
                            <td>57 Kg</td>
                        </tr>
                        <tr>
                            <td>Current:</td>
                            <td>58, 3 Kg</td>
                        </tr>
                        <tr>
                            <td>Best:</td>
                            <td>57, 9 Kg</td>
                        </tr>
                    </tbody>
                </table>
            <h4><i className="material-icons">favorite</i> Calories</h4>
            <table>
                <tbody>
                    <tr>
                        <td>Goal:</td>
                        <td>1750 calories</td>
                    </tr>
                    <tr>
                        <td>Last:</td>
                        <td>1820 calories</td>
                    </tr>
                    <tr>
                        <td>Average:</td>
                        <td>1788 calories</td>
                    </tr>
                </tbody>
            </table>
            <h4><i className="material-icons">navigation</i> Habits</h4>
            <h5>Drink at least one liter of water</h5>
                <p>Current streak: 23 days    -   Success:  23/60 days</p>
            <h5>Eat two pieces of fruit</h5>
                <p>Current streak: 23 days    -   Success:  23/60 days</p>
            <h5>Don't drink any kind of soda</h5>
                <p>Current streak: 23 days    -   Success:  23/60 days</p>
            <div>
                <RaisedButton label="Daily update" primary={true}/>
            </div>
            </div>
        );
    }
}
