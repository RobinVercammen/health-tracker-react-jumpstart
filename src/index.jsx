import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './app';
import { Router, Route, IndexRedirect, Link, useRouterHistory } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
const history = useRouterHistory(createHashHistory)({ queryKey: false })

import Calories from './components/calories';
import Dashboard from './components/dashboard';
import Habits from './components/habits';
import Settings from './components/settings';
import Weight from './components/weight';

injectTapEventPlugin();



render(
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRedirect to="dashboard"/>
            <Route path="dashboard" component={Dashboard}/>
            <Route path="calories" component={Calories}/>
            <Route path="habits" component={Habits}/>
            <Route path="settings" component={Settings}/>
            <Route path="weight" component={Weight}/>
        </Route>
    </Router>,
    document.getElementById('app-root'));
