/**
 * Created by hhly-pc on 2017/11/1.
 */
import React from 'react'
import '../assets/less/index.less'

class Hello extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};     // 状态，这个就相当于data
    }

    componentDidMount() {       // 生命周期（第一次渲染DOM时，mounting挂载）
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {     // 生命周期（DO被销毁时，unmounting卸载）
        clearInterval(this.timerID);
    }

    // 不要直接修改state（状态） 这样将不会重新渲染一个组件：
                                                        // 错误  this.state.comment = 'Hello';
                                                        // 正确   this.setState({comment: 'Hello'});
    // this.props 和 this.state 可能是异步更新的，你不能依赖他们的值计算下一个state
                                                        // 错误
                                                        //this.setState({
                                                        //                 counter: this.state.counter + this.props.increment,
                                                        //     });
                                                        // 正确
                                                        //this.setState((prevState, props) => ({
                                                        //                  counter: prevState.counter + props.increment
                                                        //      }));
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="hello-component">
                Hello,world ! React and Webpack
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
export default Hello;