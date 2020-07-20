import React from 'react'
import { Checkbox, Col, Form, Input, Row, Select } from 'antd'

export const ExerciseForm = props => {
  const { completed, description, duration, items, setCompleted, setDescription, setDuration, setExerciseName } = props

  return (
    <Form>
      <Form.Item label='Duration (mins)'>
        <Input type='duration' value={duration} onChange={e => setDuration(e.target.value)} />
      </Form.Item>

      <Form.Item label='Decription'>
        <Input type='description' value={description} onChange={e => setDescription(e.target.value)} />
      </Form.Item>

      <Form.Item label='Select Exercise'>
        <Select onChange={e => setExerciseName(e.target.value)}>
          {items.map(item => (
            <Select.Option key={item.id} value={item.name}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Checkbox checked={completed} onChange={() => setCompleted(!completed)} id='completed' />
      </Form.Item>
    </Form>
  )
}

export const WorkoutForm = props => {
  const { workoutName, setWorkoutName } = props
  return (
    <Form>
      <Form.Item label='Workout Name'>
        <Input type='name' value={workoutName} onChange={e => setWorkoutName(e.target.value)} />
      </Form.Item>
    </Form>
  )
}

/*
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
        <Form.Control as='select' onChange={e => setExerciseName(e.target.value)}>
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
          onChange={() => setCompleted(!completed)}
          id='completed'
        />
      </Form.Group>
    </Form>
*/
