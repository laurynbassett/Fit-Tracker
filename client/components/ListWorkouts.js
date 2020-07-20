import React, { useState } from 'react'
import { connect } from 'react-redux'
import { BsPlusSquare } from 'react-icons/bs'
import SingleWorkout from './SingleWorkout'
import './ListWorkouts.css'
import Modal from './Modal'

export const ListWorkouts = ({ workouts }) => {
  const [ show, setShow ] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // deconstruct workouts from passed in props
  return (
    <div id='list-workouts'>
      {workouts.map(workout => <SingleWorkout key={workout.id} workout={workout} />)}
      <BsPlusSquare size={50} onClick={handleShow} />
      <Modal isAdd={true} show={show} handleClose={handleClose} handleShow={handleShow} />
    </div>
  )
}

const mapState = state => ({
  workouts: state.workouts
})

export default connect(mapState)(ListWorkouts)
