import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Modal as ModalAD, Button } from 'antd'
import withStyles from 'react-jss'

import './Modal.css'
import { postExercise, postWorkout, putWorkout } from '../store/workouts'
import { ExerciseForm, WorkoutForm } from './Form'

const Modal = props => {
  const { addExercise, addWorkout, classes, handleClose, isEdit, isAdd, items, show, updateWorkout, workout } = props

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
    workout && setWorkoutName(workout.name)
  }, [])

  return (
    <ModalAD
      visible={show}
      onCancel={handleClose}
      title={isEdit ? 'Edit Workout' : isAdd ? 'Add Workout' : 'Add Exercise'}
      footer={[
        <Button key='cancel' variant='secondary' onClick={handleClose} className={classes.secondaryButton}>
          Cancel
        </Button>,
        <Button
          key='submit'
          variant='primary'
          type='submit'
          // change click behaviour based on props passed
          onClick={isEdit ? handleEditWorkout : isAdd ? handleAddWorkout : handleAddExercise}
          disabled={workoutName.length < 1}
          className={classes.primaryButton}
        >
          Save Changes
        </Button>
      ]}
    >
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
    </ModalAD>
  )
}

const styles = {
  primaryButton: {
    background: '#849fc9',
    borderColor: '#849fc9',
    color: '#fff',
    borderRadius: '0.3rem',
    '&:hover': {
      opacity: '0.5',
      background: '#849fc9',
      borderColor: '#849fc9',
      color: '#fff'
    },
    '&:active': {
      opacity: '1',
      background: '#849fc9',
      borderColor: '#849fc9',
      color: '#fff'
    }
  },
  secondaryButton: {
    background: '#6c757d',
    borderColor: '#6c757d',
    color: '#fff',
    borderRadius: '0.3rem',
    '&:hover': {
      opacity: '0.5',
      background: '#6c757d',
      borderColor: '#6c757d',
      color: '#fff'
    },
    '&:active': {
      opacity: '1',
      background: '#6c757d',
      borderColor: '#6c757d',
      color: '#fff'
    }
  }
}

const mapDispatch = dispatch => ({
  addExercise: (exercise, workout) => dispatch(postExercise(exercise, workout)),
  addWorkout: workout => dispatch(postWorkout(workout)),
  updateWorkout: workout => dispatch(putWorkout(workout))
})

export default withStyles(styles)(connect(null, mapDispatch)(Modal))
