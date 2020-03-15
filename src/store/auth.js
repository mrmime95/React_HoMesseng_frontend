import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, LOAD_ERROR, LOGIN_SUCCESS, LOGIN_FAIL } from '../utils/constants'
import setAuthToken from '../utils/setAuthToken'
import axios from 'axios'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
}

export const registerUser = (success, value) => dispatch => {
  dispatch({
    type: success ? REGISTER_SUCCESS : REGISTER_FAIL,
    payload: value
  })
  if (success) {
    dispatch(loadUserByToken())
  }
}

export const loginUser = (success, value) => dispatch => {
  dispatch({
    type: success ? LOGIN_SUCCESS : LOGIN_FAIL,
    payload: value
  })
  if (success) {
    dispatch(loadUserByToken())
  }
}

export const loadUserByToken = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await axios.get('api/auth')
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    console.error(err.response.data.errors)
    dispatch({
      type: LOAD_ERROR
    })
  }
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false
      }
    case REGISTER_FAIL:
    case LOAD_ERROR:
    case LOGIN_FAIL:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }
    default:
      return state
  }
}
