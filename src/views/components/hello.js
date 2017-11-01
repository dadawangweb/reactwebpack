/**
 * Created by hhly-pc on 2017/11/1.
 */
import React from 'react'
import '../assets/less/index.less'

// let Hello = React.createClass({  //  二者等效
//     render() {
//         return (
//             <div className="hello-component">
//                 Hello,world ! React and Webpack
//             </div>
//         );
//     }
// });

class Hello extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div className="hello-component">
                Hello,world ! React and Webpack
            </div>
        );
    }
}
export default Hello;