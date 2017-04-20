import { INCREMENT, DESCREMENT, AUTO_INCREMENT } from '../constants/actionType'

const initCounter = {
    number: 0
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
        case AUTO_INCREMENT:
            return {
                ...state,
                number: state.number + 2
            }
        default:
            return state
    }
}
