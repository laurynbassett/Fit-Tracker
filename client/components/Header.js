import React from 'react'
import { Row } from 'simple-flexbox'

import './Header.css'
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai'

const Header = props => {
  const { title, icon = 'assets/user.png', name = '' } = props

  return (
    <Row className='header-container' vertical='center' horizontal='space-between'>
      <span className='header-title'>{title}</span>
      <Row vertical='center'>
        <div className='icon-styles'>
          <AiOutlineSearch className='header-icon' />
        </div>
        <div className='icon-styles'>
          <AiOutlineBell className='header-icon' />
        </div>
        <div className='header-separator' />
        <Row vertical='center'>
          <span className='header-name'>{name}</span>
          <img src={icon} alt='avatar' className='header-avatar' />
        </Row>
      </Row>
    </Row>
  )
}

export default Header
