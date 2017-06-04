import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'
import Login from '../components/Pages/Login'

let store = createStore(reducer)

render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
)