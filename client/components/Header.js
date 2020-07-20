import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row } from 'simple-flexbox'
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai'
import { Dropdown as DropdownAD } from 'antd'

import './Header.css'
import Dropdown from './Dropdown'
import { logout } from '../store'

const Header = props => {
  const { title, icon = 'assets/user.png', name = '', isLoggedIn, logout, user } = props
  console.log('USER', props)
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
          <DropdownAD overlay={() => Dropdown(props)} trigger={[ 'click' ]} overlayStyle={{ margin: '1rem' }}>
            <img src={icon} alt='avatar' className='header-avatar' onClick={e => e.preventDefault()} />
          </DropdownAD>
        </Row>
      </Row>
    </Row>
  )
}

const mapState = state => ({
  isLoggedIn: !!state.user.id,
  user: state.user
})

const mapDispatch = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(Header)
