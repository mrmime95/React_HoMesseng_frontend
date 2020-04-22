import { SET_ALERT, REMOVE_ALERT } from '../utils/constants'
import { v4 } from 'uuid'

const initialState = []

export const setAlert = (alertType, msg, timeout = 5000) => dispatch => {
  const id = v4()

  dispatch({
    type: SET_ALERT,
    payload: {
      id,
      msg,
      alertType
    }
  })

  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id
    })
  }, timeout)
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_ALERT:
      return [...state, payload]
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload)
    default:
      return state
  }
}
