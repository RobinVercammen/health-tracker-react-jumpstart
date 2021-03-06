import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';
import './app.scss';
import { history } from './index';
import store from './store';

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <DrawerSimpleExample />
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

class Actions extends React.Component {
    constructor() {
        super();
        this.save = this.save.bind(this);
    }
    componentWillMount() {
        store.subscribe(() => {
            this.setState({ save: store.getState().save });
        });
    }
    save() {
        this.state.save().then(c => {
            history.goBack();
        });
    }
    render() {
        if (this.state && this.state.save) {
            return (
                <div>
                    <IconButton onClick={this.save}>
                        <FontIcon
                            className="material-icons appbar-icon"
                            >check</FontIcon>
                    </IconButton>
                </div>
            );
        }
        return <div></div>;
    }
}

class DrawerSimpleExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
        this.handleToggle = () => this.setState({ open: true });
        this.closeDrawer = () => this.setState({ open: false });

        store.subscribe(() => {
            this.setState({ title: store.getState().applicationTitle });
        });
    }


    render() {
        return (
            <div>
                <AppBar title={this.state.title} onLeftIconButtonTouchTap={this.handleToggle} iconElementRight={<Actions />} />

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
