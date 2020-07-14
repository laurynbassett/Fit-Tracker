import axios from 'axios'

// ---------- INITIAL STATE ---------- //
const initialState = {
  exerciseList: []
}

// ---------- ACTION TYPES ---------- //
const SET_EXERCISES = 'SET_EXERCISES'

// ---------- ACTION CREATORS ---------- //
export const setExercises = exercises => ({ type: SET_EXERCISES, exercises })

// ---------- THUNK CREATORS ---------- //
export const fetchExercises = () => async dispatch => {
  try {
    const { data } = await axios.get('https://wger.de/api/v2/exercise.json?language=2&category=9')
    const exercises = data.filter(exercise => exercise.name && !exercise.equipment.length)
    dispatch(setExercises(exercises))
  } catch (err) {
    console.error('Error getting exercises: ', err)
  }
}

// ---------- REDUCER ---------- //
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EXERCISES:
      return { ...state, exerciseList: action.exercises }
    default:
      return state
  }
}
