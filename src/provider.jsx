import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'react-hot-loader/patch'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import {
  Link
} from 'react-router-dom'
import configureStore, { history } from './store'
import Counter from './modules/counter/container/counter'
import Todo from './modules/todos/container/todo'

const store = configureStore()
console.log('history ', history)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <ul>
                    <li><Link to='/todo'>todo</Link></li>
                    <li><Link to='/'>Home</Link></li>
                </ul>
                <Route path='/' component={Counter} />
                <Route path='/todo' component={Todo} />
            </div>
        </ConnectedRouter>
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
