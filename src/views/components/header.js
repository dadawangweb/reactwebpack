/**
 * Created by wang.ding on 2017/11/1.
 */
import React from 'react'
import Hello from './hello'

class Header extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="hello-component">
                header class
                <Hello/>
            </div>
        );
    }
}

export default Header;