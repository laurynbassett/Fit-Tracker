import React, { useState } from 'react'
import { connect } from 'react-redux'

import './SingleWorkout.css'
import Modal from './Modal'
import SingleExercise from './SingleExercise'
import { removeWorkout } from '../store'

const SingleWorkout = props => {
  const { name, exercises } = props.workout
  const [ show, setShow ] = useState(false)
  const [ isEdit, setIsEdit ] = useState(false)

  const handleClose = () => {
    setShow(false)
    setIsEdit(false)
  }
  const handleShow = () => setShow(true)
  const handleDelete = () => props.deleteWorkout(props.workout.id)

  return (
    <div className='box'>
      <div className='box-header'>
        <h2>{name}</h2>
        <div className='box-header-buttons'>
          <i className='fas fa-plus' onClick={handleShow} />
          <i
            className='edit-workout fas fa-edit'
            onClick={() => {
              setIsEdit(true)
              handleShow()
            }}
          />
          <i className='fas fa-trash' onClick={handleDelete} />
        </div>
      </div>
      <Modal items={props.exercises} isEdit={isEdit} show={show} workout={props.workout} handleClose={handleClose} />
      <div className='box-content'>
        <ul className='exercise-list'>
          {exercises && exercises.length ? (
            exercises.map(exercise => (
              <li key={exercise.id}>
                <SingleExercise exercise={exercise} />
              </li>
            ))
          ) : (
            'no exercises'
          )}
        </ul>
      </div>
    </div>
  )
}

const mapState = state => ({
  exercises: state.exercises.exerciseList
})

const mapDispatch = dispatch => ({
  deleteWorkout: id => dispatch(removeWorkout(id))
})

export default connect(mapState, mapDispatch)(SingleWorkout)
