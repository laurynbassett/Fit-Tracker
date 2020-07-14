import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import { Header, Main } from './components'
import './App.css'

const App = () => (
  <Provider store={store}>
    <div className='App'>
      <Header />
      <Main />
    </div>
  </Provider>
)

export default App
