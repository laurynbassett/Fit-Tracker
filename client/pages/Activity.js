import React from 'react'
import { connect } from 'react-redux'

import './Activity.css'

export const Activity = () => {
  return <div id='activity'>Activity</div>
}

const mapState = state => ({})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(Activity)
