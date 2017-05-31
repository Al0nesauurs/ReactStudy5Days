import React, {Component} from 'react'


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <h2 className="title">
        <form action="/action_page.php">
        Username : <input type="text" name="User" value={this.state.value} onChange={this.handleChange} /><br />
        Password : <input type="text" name="Pass" value={this.state.value} onChange={this.handleChange} /> <br />
        <input type="submit" value="Submit" />
        </form>
      </h2>
    )
  }
}

