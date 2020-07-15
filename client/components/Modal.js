import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Modal as ModalUI } from 'react-bootstrap'
// import { Body, Footer, Header, Title } from 'react-bootstrap/Modal'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Modal.css'
import { ExerciseForm, WorkoutForm } from './Form'
import { postExercise, postWorkout, putWorkout } from '../store/workouts'

const Modal = props => {
  const { addExercise, addWorkout, handleClose, isEdit, isAdd, items, show, updateWorkout, workout } = props
  const { Header, Title, Body, Footer } = ModalUI

  // for workout form
  const [ workoutName, setWorkoutName ] = useState('')

  // for exercise form
  const [ name, setName ] = useState('')
  const [ completed, setCompleted ] = useState(false)
  const [ duration, setDuration ] = useState(0)
  const [ description, setDescription ] = useState('')

  const handleAddExercise = () => {
    console.log(name, completed, description, duration)
    const exercise = { name, completed, description, duration }
    addExercise(exercise, { id: workout.id, name: workout.name })
    setName('')
    setCompleted(false)
    setDuration(0)
    setDescription('')
    handleClose()
  }

  const handleAddWorkout = () => {
    console.log(workoutName)
    addWorkout(workoutName)
    setWorkoutName('')
    handleClose()
  }

  const handleEditWorkout = () => {
    workout.name = workoutName
    console.log(workoutName, workout)
    updateWorkout(workout)
    setWorkoutName('')
    handleClose()
  }

  useEffect(() => {
    // workout && setWorkoutName(workout.name)
  }, [])

  return (
    <ModalUI show={show} onHide={handleClose} backdrop={true}>
      <Header closeButton>
        <Title>Add an Exercise</Title>
      </Header>
      <Body>
        {isEdit || isAdd ? (
          <WorkoutForm workoutName={workoutName} setWorkoutName={setWorkoutName} />
        ) : (
          <ExerciseForm
            completed={completed}
            description={description}
            duration={duration}
            items={items}
            setCompleted={setCompleted}
            setDescription={setDescription}
            setDuration={setDuration}
            setName={setName}
          />
        )}
      </Body>
      <Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button
          variant='primary'
          type='submit'
          onClick={isEdit ? handleEditWorkout : isAdd ? handleAddWorkout : handleAddExercise}
        >
          Save Changes
        </Button>
      </Footer>
    </ModalUI>
  )
}

const mapDispatch = dispatch => ({
  addExercise: (exercise, workout) => dispatch(postExercise(exercise, workout)),
  addWorkout: workout => dispatch(postWorkout(workout)),
  updateWorkout: workout => dispatch(putWorkout(workout))
})

export default connect(null, mapDispatch)(Modal)
