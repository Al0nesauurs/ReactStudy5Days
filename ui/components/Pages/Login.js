import React, {Component,PropTypes} from 'react'
import { connect } from 'react-redux';
import { thelogin } from '../../actions/actionCreator';
import { createStore } from 'redux'

export default class Login extends Component {


    constructor(props) {
      super(props);
      this.state = {username: '',password:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      if(event.target.name=="User")
        this.setState({username: event.target.value});
      else if(event.target.name=="Pass")
        this.setState({password:event.target.value})
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

  render() {

    const dispatch = this.props.dispatch;

    const { username,password}=this.props;
    return (
      <h2 className="title">
        <form action="/action_page.php">
        Username : <input type="text" name="User" value={this.state.value} onChange={this.handleChange} /><br />
        Password : <input type="text" name="Pass" value={this.state.value} onChange={this.handleChange} /> <br />
        <input type="button" value="Submit" onClick={thelogin.bind(this, this.state.username, this.state.password)}/>

        </form>
      </h2>
    )
  }
}

