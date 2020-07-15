import axios from 'axios'

// ---------- INITIAL STATE ---------- //
const defaultWorkouts = []

// ---------- ACTION TYPES ---------- //
const SET_WORKOUTS = 'SET_WORKOUTS'
const ADD_WORKOUT = 'ADD_WORKOUT'
const UPDATE_WORKOUT = 'UPDATE_WORKOUT'
const DELETE_WORKOUT = 'DELETE_WORKOUT'
const ADD_EXERCISE = 'ADD_EXERCISE'
const UPDATE_EXERCISE = 'UPDATE_EXERCISE'
const DELETE_EXERCISE = 'DELETE_EXERCISE'

// ---------- ACTION CREATORS ---------- //
export const setWorkouts = workouts => ({ type: SET_WORKOUTS, workouts })
export const addWorkout = workout => ({ type: ADD_WORKOUT, workout })
export const updateWorkout = workout => ({ type: UPDATE_WORKOUT, workout })
export const deleteWorkout = workoutId => ({ type: DELETE_WORKOUT, workoutId })
export const addExercise = (exercise, workoutId) => ({ type: ADD_EXERCISE, exercise, workoutId })
export const updateExercise = (exerciseId, completed) => ({ type: UPDATE_EXERCISE, exerciseId, completed })
export const deleteExercise = exerciseId => ({ type: DELETE_EXERCISE, exerciseId })

// ---------- THUNK CREATORS ---------- //

// Fetch Workouts
export const fetchWorkouts = () => async dispatch => {
  try {
    const { data } = await axios.get('/workouts')
    dispatch(setWorkouts(data || defaultWorkouts))
  } catch (err) {
    console.error('Error getting workouts: ', err)
  }
}

// Edit Workout
export const putWorkout = workout => async dispatch => {
  try {
    const { data } = await axios.put(`/workouts/${workout.id}`, workout)
    console.log('UPDATED WORKOUT', data)
    dispatch(updateWorkout(workout))
  } catch (err) {
    console.error('Error updating workout: ', err)
  }
}

// Add Workout
export const postWorkout = workoutName => async dispatch => {
  try {
    const workout = { name: workoutName, date: new Date() }
    const { data } = await axios.post('/workouts', workout)
    console.log('UPDATED WORKOUT', data)

    dispatch(addWorkout(data))
  } catch (err) {
    console.error('Error adding workout: ', err)
  }
}

// Remove Workout
export const removeWorkout = workoutId => async dispatch => {
  try {
    console.log('REMOVE WORKOUT PROP', workoutId)
    await axios.delete(`/workouts/${workoutId}`)
    dispatch(deleteWorkout(workoutId))
  } catch (err) {
    console.error('Error deleting workout: ', err)
  }
}

// Edit Exercise
export const putExercise = (exerciseId, completed) => async dispatch => {
  try {
    const { data } = await axios.put(`/exercises/${exerciseId}`, { completed })
    dispatch(updateExercise(exerciseId, completed))
  } catch (err) {
    console.error('Error updating workout exercise: ', err)
  }
}

// Add Exercise
export const postExercise = (exercise, workout) => async dispatch => {
  try {
    const { data } = await axios.post('/exercises', { ...exercise, workout })
    dispatch(addExercise(data, workout.id))
  } catch (err) {
    console.error('Error updating workout exercise: ', err)
  }
}

// Remove Exercise
export const removeExercise = exerciseId => async dispatch => {
  try {
    await axios.delete(`/exercises/${exerciseId}`)
    dispatch(deleteExercise(exerciseId))
  } catch (err) {
    console.error('Error deleting workout exercise: ', err)
  }
}

// ---------- REDUCER ---------- //
export default function(state = defaultWorkouts, action) {
  switch (action.type) {
    case SET_WORKOUTS:
      return action.workouts
    case ADD_WORKOUT:
      const addedWorkout = [ ...state, action.workout ]
      return addedWorkout
    case UPDATE_WORKOUT:
      const updatedWorkout = state.map(workout => {
        if (workout.id === action.workout.id) {
          return { ...workout, name: action.workout.name }
        }
        return workout
      })
      return updatedWorkout
    case DELETE_WORKOUT:
      const deletedWorkout = state.filter(workout => workout.id !== action.workoutId)
      return deletedWorkout
    case ADD_EXERCISE:
      const addedExercise = state.map(workout => {
        if (workout.id === action.workoutId) {
          return {
            ...workout,
            exercises: [ ...workout.exercises, action.exercise ]
          }
        }
        return workout
      })
      return addedExercise
    case UPDATE_EXERCISE:
      const updatedWorkouts = state.map(workout => {
        if (workout.exercises.find(exercise => exercise.id === action.exerciseId)) {
          return {
            ...workout,
            exercises: workout.exercises.map(exercise => {
              if (exercise.id === action.exerciseId) {
                return { ...exercise, completed: action.completed }
              } else {
                return exercise
              }
            })
          }
        } else {
          return workout
        }
      })
      return updatedWorkouts
    case DELETE_EXERCISE:
      const nextWorkouts = state.map(workout => {
        if (workout.exercises.find(exercise => exercise.id === action.exerciseId)) {
          return { ...workout, exercises: workout.exercises.filter(exercise => exercise.id !== action.exerciseId) }
        }
        return workout
      })
      return nextWorkouts
    default:
      return state
  }
}
