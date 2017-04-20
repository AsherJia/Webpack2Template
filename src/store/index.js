import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// import rootReducer from '../modules/counter/reducer'
import rootReducer from '../reducer'


const finalCreateStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(logger)
)(createStore)

function configureStore(initialState = {}) {
    return finalCreateStore(rootReducer, initialState)
}

export default configureStore()



