import React, { useEffect, useState } from 'react'
import { Column, Row } from 'simple-flexbox'
import { connect } from 'react-redux'

import './App.css'
import { Header, Sidebar } from './components'
import Routes from './routes'

const App = props => {
  const [ selectedItem, setSelectedItem ] = useState('Dashboard')
  const [ width, setWidth ] = useState(window.innerWidth <= 768)
  const breakpoint = 768

  useEffect(
    () => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      handleWindowResize()
      window.addEventListener('resize', handleWindowResize)

      // Return a function from the effect that removes the event listener
      return () => window.removeEventListener('resize', handleWindowResize)
    },
    [ window.innerWidth ]
  )

  return (
    <Row className='App'>
      {props.isLoggedIn && (
        <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} width={width} breakpoint={breakpoint} />
      )}
      <Column flexGrow={1} className={`main-panel ${width < breakpoint && 'mobile'} ${!props.isLoggedIn && 'auth'}`}>
        {props.isLoggedIn && <Header title={selectedItem} />}
        <Routes className='content' />
      </Column>
    </Row>
  )
}

const mapState = state => ({
  isLoggedIn: !!state.user.id
})

export default connect(mapState)(App)
