import React, { useState } from 'react'
import { Column, Row } from 'simple-flexbox'
import { GiHamburgerMenu, GiWeightLiftingUp } from 'react-icons/gi'
import { FiActivity } from 'react-icons/fi'
import { AiOutlineDashboard, AiOutlineSchedule, AiOutlineSetting } from 'react-icons/ai'

import './Sidebar.css'
import history from '../history'
import Logo from './Logo'
import MenuItem from './MenuItem'

const Sidebar = props => {
  const { breakpoint, selectedItem, setSelectedItem, width } = props
  const [ expanded, setExpanded ] = useState(false)

  const onItemClicked = item => {
    setExpanded(false)
    setSelectedItem(item)
    history.push(`/${item.toLowerCase()}`)
  }

  const toggleMenu = () => setExpanded(!expanded)

  const renderBurger = () => (
    <div onClick={toggleMenu} className='burger-icon'>
      <GiHamburgerMenu />
    </div>
  )

  return (
    <div style={{ position: 'relative' }}>
      <Row className={`sidebar ${width < breakpoint && 'mobile'} ${expanded && 'expanded'}`}>
        {width < breakpoint && !expanded && renderBurger()}
        <Column className={`sidebar-container ${width < breakpoint && 'mobile'} ${expanded ? 'show' : 'hide'}`}>
          <Logo />
          <Column className='menu-container'>
            <div className='menu-item-list'>
              <MenuItem
                title='Dashboard'
                icon={AiOutlineDashboard}
                onClick={() => onItemClicked('Dashboard')}
                active={selectedItem === 'Dashboard'}
              />
              <MenuItem
                title='Schedule'
                icon={AiOutlineSchedule}
                onClick={() => onItemClicked('Schedule')}
                active={selectedItem === 'Schedule'}
              />
              <MenuItem
                title='Activity'
                icon={FiActivity}
                onClick={() => onItemClicked('Activity')}
                active={selectedItem === 'Activity'}
              />
              <MenuItem
                title='Workouts'
                icon={GiWeightLiftingUp}
                onClick={() => onItemClicked('Workouts')}
                active={selectedItem === 'Workouts'}
              />
            </div>
            <div className='menu-bottom'>
              <div className='sidebar-separator' />
              <MenuItem
                title='Settings'
                icon={AiOutlineSetting}
                onClick={() => onItemClicked('Settings')}
                active={selectedItem === 'Settings'}
              />
            </div>
          </Column>
        </Column>
        {width < breakpoint && expanded && <div className='outside-layer' onClick={toggleMenu} />}
      </Row>
    </div>
  )
}

export default Sidebar
