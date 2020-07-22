import axios from 'axios'

// ---------- INITIAL STATE ---------- //
const defaultActivities = []

// ---------- ACTION TYPES ---------- //
const SET_ACTIVITIES = 'SET_ACTIVITIES'
const ADD_ACTIVITY = 'ADD_ACTIVITY'
const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY'
const DELETE_ACTIVITY = 'DELETE_ACTIVITY'

// ---------- ACTION CREATORS ---------- //
export const setActivities = activities => ({ type: SET_ACTIVITIES, activities })
export const addActivity = activity => ({ type: ADD_ACTIVITY, activity })
export const updateActivity = activity => ({ type: UPDATE_ACTIVITY, activity })
export const deleteActivity = activityId => ({ type: DELETE_ACTIVITY, activityId })

// ---------- THUNK CREATORS ---------- //

// Fetch Activities
export const fetchActivities = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/activities')
    dispatch(setActivities(data || defaultActivities))
  } catch (err) {
    console.error('Error getting activities: ', err)
  }
}

// Edit Activity
export const putActivity = activity => async dispatch => {
  try {
    const { data } = await axios.put(`/api/activities/${activity.id}`, activity)
    console.log('UPDATED activity', data)
    dispatch(updateActivity(activity))
  } catch (err) {
    console.error('Error updating activity: ', err)
  }
}

// Add Activity
export const postActivity = activity => async dispatch => {
  try {
    const { data } = await axios.post('/api/activities', activity)
    console.log('ADDED activity', data)

    dispatch(addActivity(data))
  } catch (err) {
    console.error('Error adding activity: ', err)
  }
}

// Remove Activity
export const removeActivity = activityId => async dispatch => {
  try {
    console.log('REMOVE Activity PROP', activityId)
    await axios.delete(`/api/Activities/${activityId}`)
    dispatch(deleteActivity(activityId))
  } catch (err) {
    console.error('Error deleting activity: ', err)
  }
}

// ---------- REDUCER ---------- //
export default function(state = defaultActivities, action) {
  switch (action.type) {
    case SET_ACTIVITIES:
      return action.activities
    case ADD_ACTIVITY:
      const addedActivity = [ ...state, action.activity ]
      return addedActivity
    case UPDATE_ACTIVITY:
      const updatedActivity = state.map(activity => {
        if (activity.id === action.activity.id) {
          return action.activity
        }
        return activity
      })
      return updatedActivity
    case DELETE_ACTIVITY:
      const deletedActivity = state.filter(activity => activity.id !== action.activityId)
      return deletedActivity
    default:
      return state
  }
}
