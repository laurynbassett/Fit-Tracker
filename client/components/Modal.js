import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Modal as ModalUI } from 'react-bootstrap'
// import { Body, Footer, Header, Title } from 'react-bootstrap/Modal'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Modal.css'
import ExerciseForm from './Form'
import { postExercise } from '../store/workouts'

const Modal = props => {
  const { addExercise, handleClose, items, show, workout } = props
  const { Header, Title, Body, Footer } = ModalUI
  const [ name, setName ] = useState('')
  const [ completed, setCompleted ] = useState(false)
  const [ duration, setDuration ] = useState(0)
  const [ description, setDescription ] = useState('')

  const handleSubmit = () => {
    console.log(name, completed, description, duration)
    const exercise = { name, completed, description, duration }
    addExercise(exercise, { id: workout.id, name: workout.name })
    handleClose()
  }

  return (
    <ModalUI show={show} onHide={handleClose} backdrop={true}>
      <Header closeButton>
        <Title>Add an Exercise</Title>
      </Header>
      <Body>
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
      </Body>
      <Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' type='submit' onClick={handleSubmit}>
          Save Changes
        </Button>
      </Footer>
    </ModalUI>
  )
}

const mapDispatch = dispatch => ({
  addExercise: (exercise, workout) => dispatch(postExercise(exercise, workout))
})

export default connect(null, mapDispatch)(Modal)
