/**
 * Created by dadawang on 2017/10/31.
 */
import React from 'react'
import { render } from 'react-dom'    // 将组建挂载到dom上
import { AppContainer } from 'react-hot-loader'    // react热更新 浏览器自动刷新
import Hello from './views/components/hello'
import './views/assets/less/index.less'

render(
    <AppContainer>
        <Hello/>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./views/components/hello', () => {
        const NewHello = require('./views/components/hello').default;
        render(
            <AppContainer>
                <NewHello />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}