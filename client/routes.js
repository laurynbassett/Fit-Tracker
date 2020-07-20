import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import { fetchMe } from './store'
import { Activity, Login, Main, Nutrition, Profile, Schedule, Settings, Signup, Workouts } from './pages'

/**
 * COMPONENT
 */

const breakpoint = 768

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path='/' component={Main} />
            <Route path='/activity' component={Activity} />
            <Route path='/dashboard' component={Main} />
            <Route path='nutrition' component={Nutrition} />
            <Route path='/profile' component={Profile} />
            <Route path='/schedule' component={Schedule} />
            <Route path='/settings' component={Settings} />
            <Route path='/workouts' component={Workouts} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  isLoggedIn: !!state.user.id
})

const mapDispatch = dispatch => ({
  loadInitialData() {
    dispatch(fetchMe())
  }
})

export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
