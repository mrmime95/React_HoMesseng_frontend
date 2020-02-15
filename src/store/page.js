const SET_PAGE = 'SET_PAGE'

export const setPage = value => ({
  type: SET_PAGE,
  payload: value
})

export default (state = null, action) => {
  switch (action.type) {
    case SET_PAGE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
