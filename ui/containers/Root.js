import React, { Component } from 'react'
import { Provider } from 'react-redux'
import stores from '../store/stores'
import routes from '../routes'

export default class App extends Component {
  render() {
    return (

      <Provider store={stores()} key='provider'>
        {routes()}
      </Provider>
    )
  }
}