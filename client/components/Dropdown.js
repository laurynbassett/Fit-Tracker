import React from 'react'
import { Link } from 'react-router-dom'
import { Overlay } from 'react-bootstrap'

export const Dropdown = ({ target, show, toggleDropdown }) => {
  console.log('TARGET', target)
  return (
    <Overlay target={target.current} show={show} placement='bottom'>
      {({ placement, arrowProps, show: _show, popper, ...props }) => (
        <div
          className='dropdown'
          {...props}
          style={{
            top: '0rem',
            left: '-2rem',
            ...props.style
          }}
        >
          <ul>
            <Link to='/profile' onClick={toggleDropdown}>
              <li>Profile</li>
            </Link>
            <Link to='/settings' onClick={toggleDropdown}>
              <li>Settings</li>
            </Link>
          </ul>
        </div>
      )}
    </Overlay>
  )
}

export default Dropdown
