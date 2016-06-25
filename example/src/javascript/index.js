import React from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router'

import { sessionReducer } from 'jawa'

import LogInPage from './components/LogInPage'

const store = createStore(combineReducers({
  sessions: sessionReducer
}))

document.addEventListener('DOMContentLoaded', event => (
  render(
    <Provider store={store}>
      <Router>
        <Route path="/" component={LogInPage} />
      </Router>
    </Provider>, document.getElementById('root'))
))
