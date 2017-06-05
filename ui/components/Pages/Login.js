import React, {Component,PropTypes} from 'react'
import { connect } from 'react-redux';
import { thelogin } from '../../actions/actionCreator';
import { createStore} from 'redux'
import combineReducers from '../../reducers'

export class NaLogin  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:''
    };
    this.handleChange = this.handleChange.bind(this);
  }


    handleChange(event) {
      
      if(event.target.name=="User"){
        this.props.thelogin(event.target.value, this.props.user.password)
    }
      else if(event.target.name=="Pass"){
        this.props.thelogin(this.props.user.username, event.target.value)
      }
    }
    
  
  render() {
    return (
        <div>
            <div className="title">
                <div className="content">
                 Username : <input type="text" name="User" value={this.state.value} onChange={this.handleChange}  /><br />
                 Password : <input type="text" name="Pass" value={this.state.value} onChange={this.handleChange} /> <br />
                    <button className="btn btnprimary"
                        onClick={() => this.props.changeUsername()}>Change the Username
                    </button>
                </div>
            </div>
        </div>
    );
}
}


