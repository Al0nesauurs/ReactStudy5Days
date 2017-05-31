import React, { Component } from 'react'


export default class Notification extends Component {
  render() {
    return (
      <div className="title">
      Your Notification
          <div className="content">
          	You have 2 Notification <br/><br/>
          	from Andy Nevermore <a id="myLink" href="#" onclick="MyFunction();">Click here</a><br/>

          	from Ina Puthan<a id="myLink" href="#" onclick="MyFunction();">Click here</a><br/>
          	<br/>
          </div>
      </div>
    )
  }
}