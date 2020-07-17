import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Column, Row } from 'simple-flexbox'
import { PlusSquare } from 'react-bootstrap-icons'

import './Workouts.css'
import { ListWorkouts, Modal, SingleWorkout } from '../components'

export const Workouts = ({ workouts }) => {
  const [ show, setShow ] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Column id='workouts' alignSelf='center'>
      <Row className='workouts-list' wrap={true}>
        {workouts.map(workout => <SingleWorkout key={workout.id} workout={workout} />)}
      </Row>
      <PlusSquare size={50} onClick={handleShow} />
      <Modal isAdd={true} show={show} handleClose={handleClose} handleShow={handleShow} />
    </Column>
  )
}

const mapState = state => ({
  workouts: state.workouts
})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(Workouts)
