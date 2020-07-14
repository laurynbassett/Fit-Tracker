import React from 'react'
import { connect } from 'react-redux'

import SingleWorkout from './SingleWorkout'
import './ListWorkouts.css'

export const ListWorkouts = ({ workouts }) => {
  // deconstruct workouts from passed in props
  return <div id='workouts'>{workouts.map(workout => <SingleWorkout key={workout.id} workout={workout} />)}</div>
}

const mapState = state => ({
  workouts: state.workouts
})

export default connect(mapState)(ListWorkouts)
