import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

// import App from './modules/app/container/app'
import Counter from './modules/counter/container/counter'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./modules/counter/container/counter', () => {
        const NextApp = require('./modules/counter/container/counter').default

        ReactDOM.render(
            <Provider store={store}>
                <AppContainer>
                    <NextApp />
                </AppContainer>
            </Provider>,
            document.getElementById('root')
        )
    })
}
