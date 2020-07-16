import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchWorkouts, fetchExercises } from '../store'
import { Analytics, ListWorkouts } from '../components'
import './Main.css'

class Main extends Component {
  componentDidMount() {
    this.props.getWorkouts()
    this.props.getExercises()
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
  getExercises: () => dispatch(fetchExercises())
})

export default connect(null, mapDispatch)(Main)
