import React, { Component } from 'react'
import MySidebar from './MySidebar';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);


import store from "../../stores/stores"

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