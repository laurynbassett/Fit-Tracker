import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Row } from 'simple-flexbox'
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai'

import './Header.css'
import Dropdown from './Dropdown'

const Header = props => {
  const { title, icon = 'assets/user.png', name = '' } = props

  const [ showDropdown, setShowDropdown ] = useState(false)
  const target = useRef()

  const toggleDropdown = () => setShowDropdown(!showDropdown)

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
          <Link to='/profile'>
            <span className='header-name'>{name}</span>
          </Link>
          <img src={icon} alt='avatar' className='header-avatar' ref={target} onClick={toggleDropdown} />
          <Dropdown target={target} show={showDropdown} toggleDropdown={toggleDropdown} />
        </Row>
      </Row>
      {showDropdown && <div className='header-outside-layer' onClick={toggleDropdown} />}
    </Row>
  )
}

export default Header
