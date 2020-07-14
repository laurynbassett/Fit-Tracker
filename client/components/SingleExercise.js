import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { putExercise, removeExercise } from '../store'
import './SingleExercise.css'

const SingleExercise = props => {
  const { exercise, deleteExercise, updateExercise } = props
  const { id, name, duration, completed, description } = exercise

  return (
    <Fragment>
      <div className='exercise-info'>
        <div className='exercise-buttons'>
          <i
            id={`exercise-${id}`}
            className={completed ? 'toggle-complete fas fa-check-circle' : 'toggle-complete far fa-circle'}
            onClick={() => updateExercise(id, !completed)}
          />
          <i className='fas fa-trash' onClick={() => deleteExercise(id)} />
        </div>
        <h3>{name}</h3>
        <span>{duration} min</span>
      </div>
      <div className='exercise-description'>{description}</div>
    </Fragment>
  )
}

const mapDispatch = dispatch => ({
  updateExercise: (exerciseId, completed) => dispatch(putExercise(exerciseId, completed)),
  deleteExercise: id => dispatch(removeExercise(id))
})

export default connect(null, mapDispatch)(SingleExercise)
