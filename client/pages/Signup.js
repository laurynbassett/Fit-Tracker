import React from 'react'
import { Avatar, Typography } from 'antd'
import { AiOutlineLock } from 'react-icons/ai'

import { SignupForm } from '../components'
import './Signup.css'

const Signup = () => {
  return (
    <div className='signup'>
      <Avatar>
        <AiOutlineLock />
      </Avatar>
      <Typography>Sign Up</Typography>
      <SignupForm />
    </div>
  )
}

export default Signup
