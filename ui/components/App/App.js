import React, { Component } from 'react'
import MySidebar from './MySidebar';

export default class App extends Component {
  render() {
    return (
      <div>
        <MySidebar />
        <div className='container'>
          <div className='content'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}