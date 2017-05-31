import React, { Component } from 'react'


export default class Payment extends Component {
  render() {
    return (
      <div className="title">
      	Your Payment
      		<div className ="content">
      			You must pay : 0.00 <br />
      			Your budget : 1000 $ 
      		</div>
      </div>
    )
  }
}