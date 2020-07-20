import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'antd'
import { BsPlusSquare } from 'react-icons/bs'

import './Workouts.css'
import { ListWorkouts, Modal, SingleWorkout } from '../components'

export const Workouts = ({ workouts }) => {
  const [ show, setShow ] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return workouts.length ? (
    <Col id='workouts' alignSelf='center'>
      <Row className='workouts-list' wrap={true}>
        {workouts.map(workout => <SingleWorkout key={workout.id} workout={workout} />)}
      </Row>
      <BsPlusSquare size={50} onClick={handleShow} />
      <Modal isAdd={true} show={show} handleClose={handleClose} handleShow={handleShow} />
    </Col>
  ) : (
    <Col id='workouts' alignSelf='center'>
      <Row>
        <div className='workout-text'>Add workouts below</div>
      </Row>
      <Row>
        <BsPlusSquare size={50} onClick={handleShow} />
      </Row>
    </Col>
  )
}

const mapState = state => ({
  workouts: state.workouts
})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(Workouts)
