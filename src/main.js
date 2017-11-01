/**
 * Created by dadawang on 2017/10/31.
 */
import React from 'react'
import { render } from 'react-dom'    // 将组建挂载到dom上
import { AppContainer } from 'react-hot-loader'    // react热更新 浏览器自动刷新
import App from './app'
import './views/assets/less/index.less'

render(
    <AppContainer>
        <App/>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./app', () => {
        const NewApp = require('./app').default;
        render(
            <AppContainer>
                <NewApp />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}R