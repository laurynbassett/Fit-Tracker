import React from 'react'

import { SingleWorkout } from './SingleWorkout';

import './ListWorkouts.css'
export const ListWorkouts = props => {
  const { workouts } = props
  return (
    <div id="workouts">
      {workouts.map(workout => (
        <SingleWorkout key={workout.id} workout={workout} />
      ))}
    </div>
  )
}
