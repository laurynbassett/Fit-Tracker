// TODO: Connect redux store for fetching user + data
import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Login, Signup } from './components'
import { Activity, Main, Profile, Schedule, Settings, Workouts } from './pages'
import { fetchMe } from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  // componentDidMounwit() {
  //   this.props.loadInitialData()
  // }

  render() {
    // const { isLoggedIn } = this.props

    return (
      <Switch>
        <Route exact path='/' component={Main} />

        {/* Routes placed here are available to all visitors */}
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        {/* {isLoggedIn && (
          <Switch> */}
        {/* Routes placed here are only available after logging in */}
        <Route path='/activity' component={Activity} />
        <Route path='/dashboard' component={Main} />
        <Route path='/profile' component={Profile} />
        <Route path='/schedule' component={Schedule} />
        <Route path='/settings' component={Settings} />
        <Route path='/workouts' component={Workouts} />

        {/* <Route path='/home' component={UserHome} />
          </Switch>
        )} */}
        {/* Displays our Login component as a fallback */}
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
// Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
// Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

// export default withRouter(connect(mapState, mapDispatch)(Routes))
export default withRouter(Routes)

/**
 * PROP TYPES
 */
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
