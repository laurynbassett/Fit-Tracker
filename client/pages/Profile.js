import React from 'react'
import { connect } from 'react-redux'

import './Profile.css'

export const Profile = () => {
  return <div id='profile'>Profile</div>
}

const mapState = state => ({})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(Profile)
