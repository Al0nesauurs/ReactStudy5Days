import React, { Component } from 'react'
import Advertise from '../Advertise'
//import iconMarker from '../logo2.png';

export default class History extends Component {
    render(){
    return (
      <div className='title'>
        	Your History

        <div className='content'>
        	Last technician : Albert Potato <br/>
        	time = 01:37 AM<br/> <br/>
        	<img src = "./logo.jpg" />
        </div>
   	   </div>
    )
  }
}