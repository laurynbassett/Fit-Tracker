import React from 'react'
import { Row } from 'simple-flexbox'

import './MenuItem.css'
import Icon from './Icon'

const MenuItem = props => {
  const { active, icon, title, ...otherProps } = props
  return (
    <Row className={`menu-item-container ${active ? 'active' : ''}`} vertical='center' {...otherProps}>
      {active && <div className='active-menu-item-bar' />}
      <Icon
        className='menu-item-icon'
        icon={icon}
        color={active ? '#DDE2FF' : ''}
        style={{ opacity: `${!active ? '0.4' : ''}` }}
      />
      <span className={`${active && 'active'} menu-item-title`}>{title}</span>
    </Row>
  )
}

export default MenuItem
