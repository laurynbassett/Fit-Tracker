import React from 'react'
import { Form, FormControl } from 'react-bootstrap'

export const ExerciseForm = props => {
  const { completed, description, duration, items, setCompleted, setDescription, setDuration, setName } = props
  return (
    <Form>
      <Form.Group controlId='formBasicDuration'>
        <Form.Label>Duration (mins)</Form.Label>
        <Form.Control type='duration' value={duration} onChange={e => setDuration(e.target.value)} />
      </Form.Group>
      <Form.Group controlId='formBasicDescription'>
        <Form.Label>Decription</Form.Label>
        <Form.Control type='description' value={description} onChange={e => setDescription(e.target.value)} />
      </Form.Group>
      <Form.Group controlId='exercise'>
        <Form.Label>Select Exercise</Form.Label>
        <Form.Control as='select' onChange={e => setName(e.target.value)}>
          {items.map(item => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Check
          name='completed'
          label='Completed Exercise'
          value={completed}
          onChange={e => setCompleted(!completed)}
          id='completed'
        />
      </Form.Group>
    </Form>
  )
}

export const WorkoutForm = props => {
  const { workoutName, setWorkoutName } = props
  return (
    <Form>
      <Form.Group controlId='formBasicName'>
        <Form.Label>Workout Name</Form.Label>
        <Form.Control type='name' value={workoutName} onChange={e => setWorkoutName(e.target.value)} />
      </Form.Group>
    </Form>
  )
}
