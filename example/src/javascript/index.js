import React from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Route, Router, push } from 'react-router'

import { sessionReducer, SecureRoute } from 'jawa'

import LogInPage from './components/LogInPage'
import Dashboard from './components/Dashboard'

const store = createStore(combineReducers({
  sessions: sessionReducer
}))

const secureFunction = () => {
  if (3 > 2) {
    console.log('see')
  }
}

document.addEventListener('DOMContentLoaded', event => (
  render(
    <Provider store={store}>
      <Router>
        <Route path='/' component={LogInPage} />
        <SecureRoute path='/' secureWith={secureFunction}>
          <Route path='/dashboard' component={Dashboard} />
        </SecureRoute>
      </Router>
    </Provider>, document.getElementById('root'))
))
