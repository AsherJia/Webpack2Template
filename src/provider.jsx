import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'react-hot-loader/patch'
import { ConnectedRouter } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'

import configureStore, { history } from './store'

import Router from './router'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Router />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./router', () => {
        const NextRouter = require('./router').default

        ReactDOM.render(
            <Provider store={store}>
                <AppContainer>
                    <ConnectedRouter history={history}>
                        <NextRouter />
                    </ConnectedRouter>
                </AppContainer>
            </Provider>,
            document.getElementById('root')
        )
    })
}
