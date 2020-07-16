import React from 'react'
import { connect } from 'react-redux'

import './Workouts.css'

export const Workouts = () => {
  return <div>Workouts</div>
}

const mapState = state => ({})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(Workouts)
