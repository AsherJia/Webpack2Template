import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createBrowserHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

// import rootReducer from '../modules/counter/reducer'
import rootReducer from '../reducer'

// Create a history of your choosing (we're using a browser history in this case)
export const history = createBrowserHistory()
const middleware = routerMiddleware(history)

const finalCreateStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(logger),
    applyMiddleware(middleware)
)(createStore)

export default function configureStore(initialState = {}) {
    return finalCreateStore(rootReducer, initialState)
}

