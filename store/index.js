import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'
import { composeWithDevTools } from 'redux-devtools-extension'

import session, { RESET_ALL } from './session'

// stores that will not be persisted
const nonPersistReducers = []

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

// Configuration for state persisting mechanism
const persistConfig = {
  key: `${process.env.NEXT_PUBLIC_PROJECT_NAME}-primary`,
  version: 2,
  blacklist: nonPersistReducers,
  stateReconciler: autoMergeLevel1,
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const initializeStore = (preloadedState = {}) => {
  return createStore(
    persistedReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
