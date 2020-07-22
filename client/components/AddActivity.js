import React from 'react'
import { Button, Checkbox, Form, DatePicker, Input, Slider, TimePicker } from 'antd'
import moment from 'moment'

const AddActivity = props => {
  const { addActivity, selectedDay, user } = props

  // Set default activity object
  const defaultActivity = {
    name: '',
    description: '',
    duration: 0,
    date: moment.parseZone(selectedDay),
    time: moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
    completed: false
  }

  // Add the activity to db
  const handleSubmit = formValues => {
    if (user) {
      const values = {
        ...formValues,
        date: moment.parseZone(formValues['date']),
        time: formValues['time'].format('HH:mm'),
        userId: user.id
      }
      console.log('Received values of form: ', values)
      addActivity(values)
    }
  }

  return (
    <Form name='add-activity' onFinish={handleSubmit}>
      <Form.Item name='name' label='Activity'>
        <Input placeholder='Enter Activity' />
      </Form.Item>
      <Form.Item name='description' label='Description'>
        <Input placeholder='Enter Description' />
      </Form.Item>
      <Form.Item name='duration' label='Duration (mins)'>
        <Slider min={0} max={200} step={5} />
      </Form.Item>
      <Form.Item name='date' label='Date' initialValue={defaultActivity.date}>
        <DatePicker format='YYYY-MM-DD' style={{ width: '10rem' }} />
      </Form.Item>
      <Form.Item name='time' label='Time' initialValue={defaultActivity.time}>
        <TimePicker format='HH:mm' />
      </Form.Item>
      <Form.Item name='completed' label='Completed' initialValue={defaultActivity.completed} valuePropName='checked'>
        <Checkbox />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Add Activity
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddActivity
