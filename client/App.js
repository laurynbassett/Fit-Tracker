import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { Column, Row } from 'simple-flexbox'

import store from './store'
import { Header, Main } from './components'
import './App.css'
import Sidebar from './components/Sidebar'

const App = () => {
  const [ selectedItem, setSelectedItem ] = useState('Dashboard')

  return (
    <Provider store={store}>
      <Row className='App'>
        <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        <Column flexGrow={1} className='mainBlock'>
          {/* <Header title={selectedItem} /> */}
          <Main />
        </Column>
      </Row>
    </Provider>
  )
}

export default App
