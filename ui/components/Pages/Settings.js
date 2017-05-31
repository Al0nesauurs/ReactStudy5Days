import React, { Component } from 'react'


export default class Settings extends Component {
  render() {
    return (
      <div className="title">
      Your Option
         <div className="content">
         	<a id="myLink" href="#" onclick="MyFunction();">Change Email</a><br/><br/> <br/><br/>
         	<a id="myLink" href="#" onclick="MyFunction();">Change Password</a><br/><br/> <br/><br/>
         	<a id="myLink" href="#" onclick="MyFunction();">Delete User</a><br/><br/> <br/><br/>
         </div>
      </div>
    )
  }
}