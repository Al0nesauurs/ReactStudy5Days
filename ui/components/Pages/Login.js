import React, {Component,PropTypes} from 'react'
import { connect } from 'react-redux';
import { thelogin } from '../../actions/actionCreator';
import { createStore} from 'redux'
import combineReducers from '../../reducers'



export const myvalue={
    myname:'',
    mypass:''
}
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
        this.setState({username: event.target.value});
        myvalue.myname=event.target.value;
    }
      else if(event.target.name=="Pass"){
        this.setState({password:event.target.value})
        myvalue.mypass=event.target.value;
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


