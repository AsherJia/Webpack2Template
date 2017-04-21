import _ from 'lodash'
import { INCREMENT, DESCREMENT, SET_AUTOINTERVAL } from '../constants/actionType'

export const increment = () => (dispatch) => {
    dispatch({ type: INCREMENT })
}


export const decrement = () => (dispatch) => {
    dispatch({ type: DESCREMENT })
}

export const autoIncrement = () => (dispatch, getState) => {
    const { counter } = getState()
    const { autoInterval } = counter

    if (!_.isNumber(autoInterval)) {
        const newAutoInterval = setInterval(() => {
            dispatch({ type: INCREMENT })
        }, 1000)

        dispatch({
            type: SET_AUTOINTERVAL,
            autoInterval: newAutoInterval,
        })
    } else {
        clearInterval(autoInterval)

        dispatch({
            type: SET_AUTOINTERVAL,
            autoInterval: undefined,
        })
    }
}

