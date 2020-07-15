import React, { useCallback, useEffect, useState, useRef } from 'react'
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
  const [ width, setWidth ] = useState(window.innerWidth <= 768)
  const breakpoint = 768
  const [ , updateState ] = useState()
  const input1 = useRef(null)
  // const forceUpdate = useCallback(() => updateState({}), [])

  useEffect(
    () => {
      console.log('WINDOW', window.innerWidth)
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleWindowResize)

      // Return a function from the effect that removes the event listener
      return () => window.removeEventListener('resize', handleWindowResize)
    },
    [ window.innerWidth ]
  )

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

  const mainContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    ...(expanded && { width: '100%' }),
    ...(expanded && { minWidth: '100vh' })
  }

  const containerStyle = {
    transition: 'left 0.5s, right 0.5s',
    position: 'absolute',
    width: 255,
    height: 'calc(100% - 32px)',
    zIndex: 901,
    ...(expanded && { left: 0 }),
    ...(!expanded && { left: -255 })
  }
  return (
    <div className='sidebar'>
      <Row
        className='main-container'
        breakpoints={{
          768: mainContainerStyle
        }}
      >
        {width < breakpoint && !expanded && renderBurger()}
        <Column
          className='container'
          breakpoints={{
            768: containerStyle
          }}
        >
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
        {width < breakpoint && expanded && <div className='outside-layer' onClick={toggleMenu} />}
      </Row>
    </div>
  )
}

export default Sidebar
