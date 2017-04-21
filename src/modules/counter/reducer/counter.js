import { INCREMENT, DESCREMENT, SET_AUTOINTERVAL } from '../constants/actionType'

const initCounter = {
    number: 0,
    autoInterval: undefined
}

export default (state = initCounter, action = {}) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1
            }
        case DESCREMENT:
            return {
                ...state,
                number: state.number - 1
            }
        case SET_AUTOINTERVAL:
            return {
                ...state,
                autoInterval: action.autoInterval
            }
        default:
            return state
    }
}
