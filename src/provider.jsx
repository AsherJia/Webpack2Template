import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { AppContainer } from 'react-hot-loader'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import 'react-hot-loader/patch'

import store from './store'
import Counter from './modules/counter/container/counter'

console.log('browserHistory', browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={Counter} />
        </Router>
    </Provider>,
    document.getElementById('root')
)
/*
if (module.hot) {
    module.hot.accept('./router', () => {
        const NextRouter = require('./router').default

        ReactDOM.render(
            <Provider store={store}>
                <AppContainer>
                    <Router history={history}>
                        { NextRouter }
                    </Router>
                </AppContainer>
            </Provider>,
            document.getElementById('root')
        )
    })
}*/
