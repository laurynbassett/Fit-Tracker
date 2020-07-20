import React from 'react'
import { connect } from 'react-redux'

import './Schedule.css'
import { Calendar } from '../components'
import { postActivity } from '../store'

export const Schedule = props => {
  const { addActivity, user } = props

  return (
    <div id='schedule'>
      <Calendar addActivity={addActivity} user={user} />
    </div>
  )
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  addActivity: activity => dispatch(postActivity(activity))
})

export default connect(mapState, mapDispatch)(Schedule)
