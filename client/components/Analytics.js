import React from 'react'
import { connect } from 'react-redux'

import './Analytics.css'

const Analytics = props => {
  const { totalMins, faveExercise, percentCompleted } = props

  return (
    <div id='analytics'>
      <div className='box'>
        <h2 className='box-header'>Analytics</h2>
        <div className='box-content'>
          <table className='analytics-table'>
            <tbody>
              <tr className='analytics-table-row'>
                <td className='analytics-name'>Total Minutes Exercised:</td>
                <td id='total-exercised'>{totalMins}</td>
              </tr>
              <tr className='analytics-table-row'>
                <td className='analytics-name'>Favorite Exercise:</td>
                <td>{faveExercise}</td>
              </tr>
              <tr className='analytics-table-row'>
                <td className='analytics-name'>Percentage Completed:</td>
                <td id='percentage-completed'>{`${percentCompleted}%`}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function getTotalMins(exercises = []) {
  return exercises.reduce((sum, currExercise) => {
    if (currExercise.completed) sum += currExercise.duration
    return sum
  }, 0)
}

function getFaveExercise(exercises = []) {
  let countObj = {},
    mostFreqCount = 0,
    mostFreq = ''

  exercises.forEach(exercise => {
    countObj[exercise.name] = countObj[exercise.name] ? countObj[exercise.name] + 1 : 1

    if (countObj[exercise.name] > mostFreqCount) {
      mostFreqCount = countObj[exercise.name]
      mostFreq = exercise.name
    }
  })
  return mostFreq
}

function getPercentCompleted(exercises = []) {
  if (!exercises.length) return 0 // if no exercises, don't calculate
  const completedExercises = exercises.filter(exercise => exercise.completed)
  return Math.round(completedExercises.length / exercises.length * 100)
}

const mapState = state => {
  // flatten workouts into array of just exercises
  const exercises = state.workouts.reduce((a, c) => (a = c.exercises && a.concat(c.exercises)), [])

  return {
    totalMins: getTotalMins(exercises),
    faveExercise: getFaveExercise(exercises),
    percentCompleted: getPercentCompleted(exercises)
  }
}

export default connect(mapState)(Analytics)
