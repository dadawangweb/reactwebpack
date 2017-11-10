/**
 * Created by wang.ding on 2017/11/1.
 */
import React from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import CRouter from './router/Root'

// redux 注入操作
const middleware = [thunk];
const store = createStore(applyMiddleware(...middleware));
console.log(store.getState());

class App extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        <Provider store={store}>
            <CRouter/>
        </Provider>
    }
}

export default App;