import React, {Component,PropTypes} from 'react'
import { connect } from 'react-redux';
import { theregis } from '../../actions/actionCreator';
import { createStore} from 'redux'
import combineReducers from '../../reducers'


import * as firebase from 'firebase';




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
 senddata(){
    var ref = firebase.database().ref();
    var mauser = this.props.user.username;
    var mapass= this.props.user.password;
    var marepass= this.props.user.repassword;
    var maemail= this.props.user.email;
    var canReg;
    ref.once("value")
      .then(function(snapshot) {
        var chkuser = snapshot.child("AllUser").child(mauser).child("username").val();
        if(chkuser==mauser)
        {
          alert("USERNAME EXIST");
          canReg=false;
        }
        else{
          const rootRef = firebase.database().ref("/AllUser/"+mauser).set({
            username: mauser,
            password:mapass,
            repassword:marepass,
            email:maemail
          })
           alert("REGISTER DONE!")
        }
      });
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
          event.target.value,
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
                 Username :   <input type="text"        name="User"    onChange={this.handleChange}  /><br />
                 Password :   <input type="password"    name="Pass"    onChange={this.handleChange} /> <br />
                 Repassword : <input type="password"    name="REPass"  onChange={this.handleChange}  /><br />
                 Email :      <input type="text"        name="Email"   onChange={this.handleChange} /> <br />
                    <button className="btn btnprimary"
                        onClick={() => this.senddata()}>Register!
                    </button>
                </div>
            </div>
        </div>
    );
}
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
