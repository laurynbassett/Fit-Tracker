import React, { useState } from 'react'
import { connect } from 'react-redux'

import SingleExercise from './SingleExercise'
import Modal from './Modal'
import './SingleWorkout.css'

const SingleWorkout = props => {
  const { name, exercises } = props.workout
  const [ show, setShow ] = useState(false)
  const [ isEdit, setIsEdit ] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className='box'>
      <div className='box-header'>
        <h2>{name}</h2>
        <div className='box-header-buttons'>
          <i
            className='edit-workout fas fa-edit'
            onClick={() => {
              setIsEdit(true)
              handleShow()
            }}
          />
          <i className='fas fa-plus' onClick={handleShow} />
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

export default connect(mapState)(SingleWorkout)
