import { INCREMENT, DESCREMENT } from '../constants/actionType'

export const increment = () => (dispatch) => {
    dispatch({ type: INCREMENT })
}


export const decrement = () => (dispatch) => {
    dispatch({ type: DESCREMENT })
}
