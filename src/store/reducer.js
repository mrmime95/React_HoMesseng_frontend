import { combineReducers } from 'redux'
import user from './user'
import page from './page'
import navigation from './navigation'

const rootReducer = combineReducers({
  user,
  page,
  navigation
})

export default rootReducer
