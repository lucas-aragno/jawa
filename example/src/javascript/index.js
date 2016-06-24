import React from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(combineReducers({
}))

document.addEventListener('DOMContentLoaded', event => (
  render(
    <Provider store={store}>
    </Provider>, document.getElementById('root'))
))
