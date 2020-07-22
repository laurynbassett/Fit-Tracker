import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import './Schedule.css'
import { ActivityList, AddActivity, Calendar, DatePicker, EditActivity } from '../components'
import { postActivity } from '../store'

export const Schedule = props => {
  const { activities, addActivity, user } = props
  let defaultSelectedDay = moment().toDate()

  const [ selectedDay, setSelectedDay ] = useState(defaultSelectedDay)
  const [ isEditing, setIsEditing ] = useState(false)
  const [ selectedActivity, setSelectedActivity ] = useState(null)
  const [ activityKey, setActivityKey ] = useState(null)

  const editActivity = (activity, i) => {
    setActivityKey(Object.keys(activities)[i])
    setIsEditing(true)
    setSelectedActivity(activity)
  }

  const formattedDate = `${moment(selectedDay).format('MMMM')} ${selectedDay.getDate()}`
  console.log('L', activities)
  return (
    <div id='schedule'>
      <div className='calendar'>
        <Calendar activities={activities} setSelectedDay={setSelectedDay} user={user} />
      </div>
      <div className='date-picker'>
        {isEditing ? (
          <Fragment>
            <h4>Edit activity on {formattedDate}</h4>
            <EditActivity
              activityKey={activityKey}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              setIsEditing={setIsEditing}
              user={user}
            />
          </Fragment>
        ) : (
          <Fragment>
            <h4>Add activity on {formattedDate}</h4>
            <AddActivity addActivity={addActivity} selectedDay={selectedDay} user={user} />
          </Fragment>
        )}
      </div>
      <div className='activity-list'>
        <ActivityList editActivity={editActivity} setIsEditing={setIsEditing} user={user} />
      </div>
    </div>
  )
}

const mapState = state => ({
  user: state.user,
  activities: state.activities
})

const mapDispatch = dispatch => ({
  addActivity: activity => dispatch(postActivity(activity))
})

export default connect(mapState, mapDispatch)(Schedule)
