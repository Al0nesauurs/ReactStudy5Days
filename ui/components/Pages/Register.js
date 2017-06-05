import React, {Component,PropTypes} from 'react'
import { connect } from 'react-redux';
import { theregis } from '../../actions/actionCreator';
import { createStore} from 'redux'
import combineReducers from '../../reducers'


export class Register  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:'',
      repassword:'',
      email:'',
    };
    this.handleChange = this.handleChange.bind(this);
  }


    handleChange(event) {
      if(event.target.name=="User"){
        this.props.theregis(
          event.target.value, 
          this.props.user.password,
          this.props.user.repassword,
          this.props.user.email
          )
    }
      else if(event.target.name=="Pass"){
        this.props.theregis(
          this.props.user.username, 
          this.props.user.password,
          this.props.user.repassword,
          this.props.user.email
          )      
        }
      else if(event.target.name=="REPass"){
        this.props.theregis(
          this.props.user.username, 
          this.props.user.password,
          event.target.value, 
          this.props.user.email
          )      
        }
      else if(event.target.name=="Email"){
        this.props.theregis(
          this.props.user.username, 
          this.props.user.password,
          this.props.user.repassword,
          event.target.value, 
          )      
        }
    }
    
  
  render() {
    return (
        <div>
            <div className="title">
                <div className="content">
                 Username :   <input type="text"        name="User"   value={this.state.value} onChange={this.handleChange}  /><br />
                 Password :   <input type="password"    name="Pass"   value={this.state.value} onChange={this.handleChange} /> <br />
                 Repassword : <input type="password"    name="REPass" value={this.state.value} onChange={this.handleChange}  /><br />
                 Email :      <input type="text"        name="Email"  value={this.state.value} onChange={this.handleChange} /> <br />
                    <button className="btn btnprimary"
                        onClick={() => this.props.RegUsername()}>Register!
                    </button>
                </div>
            </div>
        </div>
    );
}
}


