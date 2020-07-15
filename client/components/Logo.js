import React from 'react'
import { Row } from 'simple-flexbox'

import './Logo.css'

const Logo = () => (
  <Row className='logo-container' horizontal='center' vertical='center'>
    <img src='assets/logo.png' className='logo' />
    <span className='title'>Fit Tracker</span>
  </Row>
)

export default Logo
