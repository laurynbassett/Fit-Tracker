import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchWorkouts, fetchExercises, fetchActivities } from '../store'
import { Analytics, ListWorkouts } from '../components'
import './Main.css'

class Main extends Component {
  componentDidMount() {
    this.props.getWorkouts()
    this.props.getExercises()
    this.props.getActivities()
  }

  render() {
    return (
      <div id='main'>
        <Analytics />
        <ListWorkouts />
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  getWorkouts: () => dispatch(fetchWorkouts()),
  getExercises: () => dispatch(fetchExercises()),
  getActivities: () => dispatch(fetchActivities())
})

export default connect(null, mapDispatch)(Main)
