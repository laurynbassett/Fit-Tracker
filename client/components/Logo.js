import React from 'react'
import { Link } from 'react-router-dom'
import { Row } from 'simple-flexbox'

import './Logo.css'

const Logo = () => (
  <Link to='/'>
    <Row className='logo-container' horizontal='center' vertical='center'>
      <img src='assets/logo.png' className='logo' />
      <h2 className='logo-title'>Fit Tracker</h2>
    </Row>
  </Link>
)

export default Logo
