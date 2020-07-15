import React, { useCallback, useEffect, useState } from 'react'
import { Column, Row } from 'simple-flexbox'
import { GiHamburgerMenu, GiWeightLiftingUp } from 'react-icons/gi'

import { FiActivity } from 'react-icons/fi'
import { AiOutlineDashboard, AiOutlineSchedule, AiOutlineSetting } from 'react-icons/ai'

import Logo from './Logo'
import MenuItem from './MenuItem'
import './Sidebar.css'

const Sidebar = props => {
  const { selectedItem, setSelectedItem } = props
  const [ expanded, setExpanded ] = useState(false)
  const [ isMobile, setIsMobile ] = useState(window.innerWidth <= 768)
  const [ , updateState ] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])

  const onItemClicked = item => {
    console.log('ITEM CLICKED', item)
    setExpanded(false)
    setSelectedItem(item)
  }

  const toggleMenu = () => setExpanded(!expanded)

  const renderBurger = () => (
    <div onClick={toggleMenu} className='burger-icon'>
      <GiHamburgerMenu />
    </div>
  )

  useEffect(
    () => {
      setIsMobile(window.innerWidth <= 768)
      forceUpdate()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [ window.innerWidth ]
  )

  return (
    <div className='sidebar'>
      <Row className='main-container'>
        {isMobile && !expanded && renderBurger()}
        <Column className='container'>
          <Logo />
          <Column className='menu-item-list'>
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
              title='Workout'
              icon={GiWeightLiftingUp}
              onClick={() => onItemClicked('Workout')}
              active={selectedItem === 'Workout'}
            />
            <div className='separator' />
            <MenuItem
              title='Settings'
              icon={AiOutlineSetting}
              onClick={() => onItemClicked('Settings')}
              active={selectedItem === 'Settings'}
            />
          </Column>
        </Column>
      </Row>
    </div>
  )
}

export default Sidebar
