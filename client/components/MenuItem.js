import React from 'react'
import { Row } from 'simple-flexbox'

import './MenuItem.css'
import Icon from './Icon'

const MenuItem = props => {
  const { active, icon, title, ...otherProps } = props
  // const Icon = icon
  console.log('ICON', icon)
  return (
    <Row className={`menu-container ${active ? 'active-container' : ''}`} vertical='center' {...otherProps}>
      {active && <div className='active-bar' />}
      <Icon icon={icon} color={active ? '#DDE2FF' : ''} style={{ opacity: `${!active ? '0.4' : ''}` }} />
      <span className={`${active && 'active-title'} menu-title`}>{title}</span>
    </Row>
  )
}

export default MenuItem
