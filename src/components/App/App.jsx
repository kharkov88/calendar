import React, { Component } from 'react'
import './App.css'
import './bootstrap.css'
import { BrowserRouter as Router, Switch, Route, Link } from'react-router-dom'

import IndexPage from '../Index'
import LoginPage from '../Login'
import CalendarPage from '../Calendar'

class App extends Component {
  render () {
    return (
      <Switch> 
          <Route exact path='/' component={IndexPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/calendar' component={CalendarPage} />
      </Switch>
    )
  }
}

export default App
/*
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome234 to React</h1>
        </header>
      </div>
      */