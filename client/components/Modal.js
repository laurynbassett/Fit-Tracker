import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Button, Modal as ModalUI } from 'react-bootstrap'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Modal.css'
import { postExercise, postWorkout, putWorkout } from '../store/workouts'
import { ExerciseForm, WorkoutForm } from './Form'

const Modal = props => {
  const { addExercise, addWorkout, handleClose, isEdit, isAdd, items, show, updateWorkout, workout } = props

  // for workout form
  const [ workoutName, setWorkoutName ] = useState('')

  // for exercise form
  const [ completed, setCompleted ] = useState(false)
  const [ duration, setDuration ] = useState(0)
  const [ description, setDescription ] = useState('')
  const [ exerciseName, setExerciseName ] = useState('')

  const handleAddExercise = () => {
    const exercise = { name, completed, description, duration }
    addExercise(exercise, { id: workout.id, name: workout.name })
    setName('')
    setCompleted(false)
    setDuration(0)
    setDescription('')
    handleClose()
  }

  const handleAddWorkout = () => {
    addWorkout(workoutName)
    setWorkoutName('')
    handleClose()
  }

  const handleEditWorkout = () => {
    workout.name = workoutName
    updateWorkout(workout)
    setWorkoutName('')
    handleClose()
  }

  useEffect(() => {
    // workout && setWorkoutName(workout.name)
  }, [])

  return (
    <ModalUI show={show} onHide={handleClose} backdrop={true}>
      <ModalUI.Header closeButton>
        <ModalUI.Title>Add an Exercise</ModalUI.Title>
      </ModalUI.Header>
      <ModalUI.Body>
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
            setExerciseName={setExerciseName}
          />
        )}
      </ModalUI.Body>
      <ModalUI.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button
          variant='primary'
          type='submit'
          // change click behaviour based on props passed
          onClick={isEdit ? handleEditWorkout : isAdd ? handleAddWorkout : handleAddExercise}
        >
          Save Changes
        </Button>
      </ModalUI.Footer>
    </ModalUI>
  )
}

const mapDispatch = dispatch => ({
  addExercise: (exercise, workout) => dispatch(postExercise(exercise, workout)),
  addWorkout: workout => dispatch(postWorkout(workout)),
  updateWorkout: workout => dispatch(putWorkout(workout))
})

export default connect(null, mapDispatch)(Modal)
