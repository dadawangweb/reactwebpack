/**
 * Created by hhly-pc on 2017/11/1.
 */
import React from 'react'
import '../assets/less/index.less'

let Hello = React.createClass({
    render() {
        return (
            <div className="hello-component">
                Hello,world ! React and Webpack
            </div>
        );
    }
});

export default Hello;