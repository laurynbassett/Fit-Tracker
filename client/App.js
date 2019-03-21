import React, { Component } from 'react'

import {
  Header,
  Main,
} from './components'

import { initialState } from './initialState'

import './App.css'
export class App extends Component {
  constructor(props) {
    super(props)

    this.state = initialState
  }

  render() {
    const { workouts } = this.state

    return (
      <div className="App">
        <Header />
        <Main workouts={ workouts } />
      </div>
    )
  }
}
