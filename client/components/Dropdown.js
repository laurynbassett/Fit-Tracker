import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

import 'antd/dist/antd.css'

export const Dropdown = props => {
  console.log('pORPS', props)
  const { isLoggedIn, logout } = props
  return (
    <Menu>
      <Menu.Item>
        <Link to='/profile'>Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/settings'>Settings</Link>
      </Menu.Item>
      {props.isLoggedIn && (
        <Menu.Item>
          <a href='#' onClick={logout}>
            Logout
          </a>
        </Menu.Item>
      )}
    </Menu>
  )
}

export default Dropdown
