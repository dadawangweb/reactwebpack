/**
 * Created by wang.ding on 2017/11/6.
 */
import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                hello login !!!!
                <Link to="/index" />
            </div>
        )
    }
}