const SET_NAVIGATION = 'SET_NAVIGATION'

export const setNavigation = value => ({
  type: SET_NAVIGATION,
  payload: value
})

export default (state = null, action) => {
  switch (action.type) {
    case SET_NAVIGATION:
      return action.payload
    default:
      return state
  }
}
