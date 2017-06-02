import React, {Component,PropTypes} from 'react'
import { connect } from 'react-redux';
import { thelogin } from '../../actions/actionCreator';
import { createStore } from 'redux'
let store = createStore(thelogin, [ 'Use Redux' ])

export default class Login extends Component {


    static PropTypes={
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired
    }

  render() {
    const dispatch = this.props.dispatch;

    const { username,password}=this.props;
    return (
      <h2 className="title">
        <form action="/action_page.php">
        Username : <input type="text" name="User" value={this.props.value} onChange={this.handleInputChange} /><br />
        Password : <input type="text" name="Pass" value={this.props.value} onChange={this.handleInputChange} /> <br />
        <input type="button" value="Submit" onClick={thelogin.bind(this, username, password)}/>

        </form>
      </h2>
    )
  }
}

