import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import activities from './activities'
import exercises from './exercises'
import user from './user'
import workouts from './workouts'

// ---------- REDUCER---------- //
const reducer = combineReducers({ activities, exercises, user, workouts })

// ---------- MIDDLEWARE ---------- //
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))

// ---------- STORE ---------- //
const store = createStore(reducer, middleware)

export default store
export * from './activities'
export * from './exercises'
export * from './user'
export * from './workouts'
