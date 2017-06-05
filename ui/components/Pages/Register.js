import React, {Component,PropTypes} from 'react'
import { connect } from 'react-redux';
import { theregis } from '../../actions/actionCreator';
import { createStore} from 'redux'
import combineReducers from '../../reducers'



export const myvalue={
    myname:'',
    mypass:'',
    myrepass:'',
    myemail:''
}
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
        this.setState({username: event.target.value});
        myvalue.myname=event.target.value;
    }
      else if(event.target.name=="Pass"){
        this.setState({password:event.target.value})
        myvalue.mypass=event.target.value;
      }
      else if(event.target.name=="REPass"){
        this.setState({repassword:event.target.value})
        myvalue.myrepass=event.target.value;
      }
      else if(event.target.name=="Email"){
        this.setState({email:event.target.value})
        myvalue.myemail=event.target.value;
      }
    }
    
  
  render() {
    return (
        <div>
            <div className="title">
                <div className="content">
                 Username :   <input type="text"   name="User"   value={this.state.value} onChange={this.handleChange}  /><br />
                 Password :   <input type="text"   name="Pass"   value={this.state.value} onChange={this.handleChange} /> <br />
                 Repassword : <input type="text"   name="REPass" value={this.state.value} onChange={this.handleChange}  /><br />
                 Email :      <input type="text"   name="Email"  value={this.state.value} onChange={this.handleChange} /> <br />
                    <button className="btn btnprimary"
                        onClick={() => this.props.RegUsername()}>Register!
                    </button>
                </div>
            </div>
        </div>
    );
}
}


