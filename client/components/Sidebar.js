import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Column, Row } from 'simple-flexbox'
import { GiHamburgerMenu, GiWeightLiftingUp } from 'react-icons/gi'
import { FiActivity } from 'react-icons/fi'
import { AiOutlineDashboard, AiOutlineSchedule, AiOutlineSetting } from 'react-icons/ai'
import { FaAppleAlt } from 'react-icons/fa'

import './Sidebar.css'
import Logo from './Logo'
import MenuItem from './MenuItem'

const Sidebar = props => {
  const { breakpoint, selectedItem, setSelectedItem, width } = props
  const [ expanded, setExpanded ] = useState(false)

  const onItemClicked = item => {
    setExpanded(false)
    setSelectedItem(item)
  }

  const toggleMenu = () => setExpanded(!expanded)

  const renderBurger = () => (
    <div onClick={toggleMenu} className='burger-icon'>
      <GiHamburgerMenu color='#5f7494' />
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
              <Link to='/dashboard'>
                <MenuItem
                  title='Dashboard'
                  icon={AiOutlineDashboard}
                  onClick={() => onItemClicked('Dashboard')}
                  active={selectedItem === 'Dashboard'}
                />
              </Link>
              <Link to='/schedule'>
                <MenuItem
                  title='Schedule'
                  icon={AiOutlineSchedule}
                  onClick={() => onItemClicked('Schedule')}
                  active={selectedItem === 'Schedule'}
                />
              </Link>
              <Link to='/activity'>
                <MenuItem
                  title='Activity'
                  icon={FiActivity}
                  onClick={() => onItemClicked('Activity')}
                  active={selectedItem === 'Activity'}
                />
              </Link>
              <Link to='/workouts'>
                <MenuItem
                  title='Workouts'
                  icon={GiWeightLiftingUp}
                  onClick={() => onItemClicked('Workouts')}
                  active={selectedItem === 'Workouts'}
                />
              </Link>
              <Link to='/nutrition'>
                <MenuItem
                  title='Nutrition'
                  icon={FaAppleAlt}
                  onClick={() => onItemClicked('Nutrition')}
                  active={selectedItem === 'Nutrition'}
                />
              </Link>
            </div>
            <div className='menu-bottom'>
              <div className='sidebar-separator' />
              <Link to='/settings'>
                <MenuItem
                  title='Settings'
                  icon={AiOutlineSetting}
                  onClick={() => onItemClicked('Settings')}
                  active={selectedItem === 'Settings'}
                />
              </Link>
            </div>
          </Column>
        </Column>
        {width < breakpoint && expanded && <div className='outside-layer' onClick={toggleMenu} />}
      </Row>
    </div>
  )
}

export default Sidebar
