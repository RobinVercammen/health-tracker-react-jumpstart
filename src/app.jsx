import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';
import './app.scss';

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <DrawerSimpleExample/>
                    <div id="router-route">
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class DrawerSimpleExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
        this.handleToggle = () => this.setState({ open: true });
        this.closeDrawer = () => this.setState({ open: false });
    }


    render() {
        return (
            <div>
                <AppBar onLeftIconButtonTouchTap={this.handleToggle}/>

                <Drawer swipeAreaWidth={0} open={this.state.open} docked={false} className="app-drawer" onRequestChange={this.closeDrawer}>
                    <MenuItem leftIcon={<FontIcon
                        className="material-icons"
                        >accessibility</FontIcon>} containerElement={<Link to={'/dashboard'}></Link>} primaryText={'Dashboard'}></MenuItem>
                    <MenuItem leftIcon={<FontIcon
                        className="material-icons"
                        >straighten</FontIcon>} containerElement={<Link to={'/weight'}></Link>} primaryText={'Weight'}></MenuItem>
                    <MenuItem leftIcon={<FontIcon
                        className="material-icons"
                        >favorite</FontIcon>} containerElement={<Link to={'/calories'}></Link>} primaryText={'Calories'}></MenuItem>
                    <MenuItem leftIcon={<FontIcon
                        className="material-icons"
                        >navigation</FontIcon>} containerElement={<Link to={'/habits'}></Link>} primaryText={'Habits'}></MenuItem>
                    <MenuItem leftIcon={<FontIcon
                        className="material-icons"
                        >settings</FontIcon>} containerElement={<Link to={'/settings'}></Link>} primaryText={'Settings'}></MenuItem>
                </Drawer>
            </div>
        );
    }
}
