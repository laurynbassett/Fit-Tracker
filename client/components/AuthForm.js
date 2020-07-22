import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Col, Form, Input, Row, Space } from 'antd'
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai'

import { auth } from '../store'
import './AuthForm.css'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const { name, displayName, handleSubmit, error } = props

  return (
    <Form
      name={name}
      className='auth-form'
      initialValues={{
        remember: true
      }}
      onFinish={e => handleSubmit(e, name)}
    >
      <Form.Item
        name='email'
        rules={[
          {
            required: true,
            message: 'Please input your Email!'
          }
        ]}
      >
        <Input prefix={<AiOutlineUser className='site-form-item-icon' />} placeholder='Email' />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your Password!'
          }
        ]}
      >
        <Input prefix={<AiOutlineLock className='site-form-item-icon' />} type='password' placeholder='Password' />
      </Form.Item>
      <Form.Item className='buttons'>
        <Button type='primary' htmlType='submit' className='login-form-button'>
          {displayName}
        </Button>
        <span>or</span>
        <Space>
          <Link to='/auth/google'>
            <Button>{displayName} with Google</Button>
          </Link>
        </Space>
      </Form.Item>
      {name === 'login' ? <Link to='/signup'>Sign Up</Link> : <Link to='/login'>Login</Link>}
      {error && error.response && <div> {error.response.data} </div>}
    </Form>
  )
}

/**
 * CONTAINER
 *   Two different sets of 'mapState' functions -
 *   one for Login, one for Signup
 */
const mapLogin = state => ({
  name: 'login',
  displayName: 'Login',
  error: state.user.error
})

const mapSignup = state => ({
  name: 'signup',
  displayName: 'Sign Up',
  error: state.user.error
})

const mapDispatch = dispatch => ({
  handleSubmit: (evt, formName) => {
    const email = evt.email
    const password = evt.password
    dispatch(auth(email, password, formName))
  }
})

export const LoginForm = connect(mapLogin, mapDispatch)(AuthForm)
export const SignupForm = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
