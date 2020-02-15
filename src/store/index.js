import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

/**
 * Initializes the store based on existing state.
 * @param {Object} preloadedState
 */
const configureStore = preloadedState => {
  const wrapReduxDevTools =
    process.env.NODE_ENV === 'development' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : _ => _

  return createStore(
    rootReducer,
    {
      // Call all reducers once to grab initial state.
      ...rootReducer(undefined, { action: undefined }),
      ...preloadedState
    },
    wrapReduxDevTools(applyMiddleware(thunk))
  )
}

export default configureStore
