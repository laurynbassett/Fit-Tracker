import React from 'react'
import { Avatar, Typography } from 'antd'
import { AiOutlineLock } from 'react-icons/ai'

import { LoginForm } from '../components'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
      <Avatar>
        <AiOutlineLock />
      </Avatar>
      <Typography>Login</Typography>
      <LoginForm />
    </div>
  )
}

export default Login
