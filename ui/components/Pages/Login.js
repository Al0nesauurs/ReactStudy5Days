import React, {Component,PropTypes} from 'react'
import { connect } from 'react-redux';
import { thelogin } from '../../actions/actionCreator';
import { createStore} from 'redux'
import combineReducers from '../../reducers'
import * as firebase from 'firebase';


export class NaLogin  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:''
    };
    this.handleChange = this.handleChange.bind(this);
  }

 matchdata(){
    var ref = firebase.database().ref();
    var mauser = this.props.user.username;
    var mapass = this.props.user.password;
    ref.once("value")
      .then(function(snapshot) {
        var chkuser = snapshot.child("AllUser").child(mauser).child("username").val(); 
        var chkpass = snapshot.child("AllUser").child(mauser).child("password").val(); 
        if(mauser==chkuser&&mapass==chkpass)
            alert("CAN LOGIN");
        else
            alert("Wroung User or Password");
    });
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
                 Username : <input type="text" name="User" onChange={this.handleChange}  /><br />
                 Password : <input type="text" name="Pass" onChange={this.handleChange} /> <br />
                    <button className="btn btnprimary"
                         onClick={() => this.matchdata()}>Login
                    </button>
                </div>
            </div>
        </div>
    );
}
}


