import React from 'react'
import { Button, Checkbox, Form, DatePicker, Input, Slider, TimePicker } from 'antd'
import moment from 'moment'

const EditActivity = props => {
  const { updateActivity, selectedActivity, setIsEditing, user } = props

  // Set default activity object
  const defaultActivity = {
    ...selectedActivity,
    date: moment(selectedActivity.date),
    time: moment(selectedActivity.time, 'HH:mm')
  }

  // Add edited activity to db
  const handleSubmit = formValues => {
    if (user) {
      console.log('DATE: ', formValues.date.date())

      const values = {
        ...formValues,
        date: moment.parseZone(formValues['date']),
        time: formValues['time'].format('HH:mm'),
        userId: user.id,
        id: defaultActivity.id
      }
      console.log('Received values of form: ', values)
      updateActivity(values)
      setIsEditing(false)
    }
  }

  console.log('DEF AC', defaultActivity)

  return (
    <Form name='edit-activity' onFinish={handleSubmit} initialValues={defaultActivity}>
      <Form.Item name='name' label='Activity'>
        <Input placeholder='Enter Activity' />
      </Form.Item>
      <Form.Item name='description' label='Description'>
        <Input placeholder='Enter Description' />
      </Form.Item>
      <Form.Item name='duration' label='Duration (mins)'>
        <Slider min={0} max={200} step={5} />
      </Form.Item>
      <Form.Item name='date' label='Date'>
        <DatePicker format='YYYY-MM-DD' style={{ width: '10rem' }} />
      </Form.Item>
      <Form.Item name='time' label='Time'>
        <TimePicker format='HH:mm' />
      </Form.Item>
      <Form.Item name='completed' label='Completed' valuePropName='checked'>
        <Checkbox />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Save Changes
        </Button>
      </Form.Item>
    </Form>
  )
}

export default EditActivity
