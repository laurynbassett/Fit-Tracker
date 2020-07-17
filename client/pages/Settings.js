import React from 'react'
import { connect } from 'react-redux'

import './Settings.css'

export const Settings = () => {
  return <div id='settings'>Settings</div>
}

const mapState = state => ({})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(Settings)
