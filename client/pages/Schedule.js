import React from 'react'
import { connect } from 'react-redux'

import './Schedule.css'

export const Schedule = () => {
  return <div id='schedule'>Schedule</div>
}

const mapState = state => ({})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(Schedule)
