import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

const middleware = [thunk]

/**
 * Initializes the store based on existing state.
 * @param {Object} preloadedState
 */
const configureStore = preloadedState =>
  createStore(
    rootReducer,
    {
      // Call all reducers once to grab initial state.
      ...rootReducer(undefined, { action: undefined }),
      ...preloadedState
    },
    composeWithDevTools(applyMiddleware(...middleware))
  )

export default configureStore
