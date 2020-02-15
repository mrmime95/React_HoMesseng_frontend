const SET_USER = 'SET_USER'

export const setUser = value => ({
  type: SET_USER,
  payload: value
})

export default (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload
    default:
      return state
  }
}
