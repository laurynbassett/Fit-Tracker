import React from 'react'

import { Analytics } from './Analytics'
import { ListWorkouts } from './ListWorkouts'

import './Main.css'
export const Main = (props) => {
  const { workouts } = props

  return (
    <div id="main">
      <Analytics />
      <ListWorkouts workouts={ workouts } />
    </div>
  )
}
