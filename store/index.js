import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import session, { RESET_ALL } from './session'

// stores that will not be persisted
const nonPersistReducers = [
]

// Combine all reducers
const reducer = combineReducers({
  session
})

const rootReducer = (state, action) => {
  if (action.type === RESET_ALL) {
    return reducer(undefined, action)
  }

  return reducer(state, action)
}

export const initializeStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
