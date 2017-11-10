/**
 * Created by wang.ding on 2017/11/6.
 */
import React, { Component } from 'react';
import { Router, Route, hashHistory} from 'react-router';
import App from '../app';
import Login from '../login'
import NotFound from '../NotFound'

class CRouter extends Component {
    render() {
        <Router history={hashHistory}>
            <Route path={'app'} component={App}>
            </Route>
            <Route path={'login'} components={Login} />
            <Route path={'404'} components={NotFound} />
        </Router>
    }
}