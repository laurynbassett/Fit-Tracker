import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import './Schedule.css'
import { ActivityList, AddActivity, Calendar, DatePicker, EditActivity } from '../components'
import { postActivity, putActivity, removeActivity } from '../store'

export const Schedule = props => {
  const { activities, addActivity, deleteActivity, updateActivity, user } = props
  let defaultSelectedDay = moment().toDate()

  const [ selectedDay, setSelectedDay ] = useState(defaultSelectedDay)
  const [ isEditing, setIsEditing ] = useState(false)
  const [ selectedActivity, setSelectedActivity ] = useState(null)

  const editActivity = (activity, i) => {
    setIsEditing(true)
    console.log('ACTIVITY', activity)
    console.log('ACTIVITIES', activities[i])
    setSelectedActivity(activities[i])
  }

  const removeActivity = i => {
    const selected = activities[i]
    console.log('SELECTED TO REMOVE', selected)
    deleteActivity(selected.id)
  }

  const formattedDate = `${moment(selectedDay).format('MMMM')} ${selectedDay.getDate()}`

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
              selectedActivity={selectedActivity}
              setIsEditing={setIsEditing}
              updateActivity={updateActivity}
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
        <ActivityList
          activities={activities}
          removeActivity={removeActivity}
          editActivity={editActivity}
          setIsEditing={setIsEditing}
          user={user}
        />
      </div>
    </div>
  )
}

const mapState = state => ({
  user: state.user,
  activities: state.activities
})

const mapDispatch = dispatch => ({
  addActivity: activity => dispatch(postActivity(activity)),
  updateActivity: activity => dispatch(putActivity(activity)),
  deleteActivity: id => dispatch(removeActivity(id))
})

export default connect(mapState, mapDispatch)(Schedule)
