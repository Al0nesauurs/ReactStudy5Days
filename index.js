import React, { Component } from 'react'
import { render } from 'react-dom'
import './styles.scss'

export default class HelloWorld extends Component {
  render() {
    return (
    	<div>
   		   <h1>Hello World</h1>
    	</div>
    )
  }
}

render(<HelloWorld />, document.getElementById('app'))