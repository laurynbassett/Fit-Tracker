import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import user from './user'
import exercises from './exercises'
import workouts from './workouts'

// ---------- REDUCER---------- //
const reducer = combineReducers({ user, exercises, workouts })

// ---------- MIDDLEWARE ---------- //
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))

// ---------- STORE ---------- //
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './exercises'
export * from './workouts'
