import axios from 'axios'
import history from '../history'

// ---------- INITIAL STATE ---------- //
const defaultUser = {}

// ---------- ACTION TYPES ---------- //
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

// ---------- ACTION CREATORS ---------- //
const getUser = user => ({ type: GET_USER, user })
const removeUser = () => ({ type: REMOVE_USER })

// ---------- THUNK CREATORS ---------- //
export const fetchMe = () => async dispatch => {
  try {
    const { data } = await axios.get('/auth/me')
    dispatch(getUser(data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, { email, password })
  } catch (authErr) {
    console.error('Error getting user: ', authErr)
    return dispatch(getUser({ error: authErr }))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/dashboard')
  } catch (err) {
    console.error('Error logging in: ', err)
  }
}

export const logout = () => async dispatch => {
  try {
    console.log('IN STORE LOGOUT')
    await axios.delete('/auth/logout')
    console.log('IN LOGOUT PAST AXIOS')

    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error('Error logging out: ', err)
  }
}

export const postActivity = (activity) => async dispatch => {
  try {
    console.log('IN ACTIVITY STORE')
    await axios.post('/api/')
    console.log('IN ACTIVITY PAST AXIOS')

    dispatch(setActivity(data))
    history.push('/login')
  } catch (err) {
    console.error('Error logging out: ', err)
  }
}

// ---------- REDUCER ---------- //
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
