import React, { Component } from 'react'
import MySidebar from './MySidebar';
import reducer from '../../reducers'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';


import * as reducers from '../../reducers';
import LoginWeb from '../../containers/LoginWeb';

let store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
    <div>
      <MySidebar/>
           <Provider store={store}>
           <div className="container">
           <div className="content">
              {this.props.children}
           </div>
           </div>
      </Provider> 
   </div>

    )
  }
}