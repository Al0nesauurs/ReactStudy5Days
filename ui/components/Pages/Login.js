import React, {Component,PropTypes} from 'react'
import { connect } from 'react-redux';
import { thelogin } from '../../actions/actionCreator';
import { createStore} from 'redux'
import combineReducers from '../../reducers'


const store =createStore(combineReducers);

store.subscribe(()=>{
  console.log("store changed",store.getState())
})

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:''
    };
    this.handleChange = this.handleChange.bind(this);
  }


    handleChange(event) {
      if(event.target.name=="User")
        this.setState({username: event.target.value});
      else if(event.target.name=="Pass")
        this.setState({password:event.target.value})
    }



  render() {

  

    return (
      <h2 className="title">
        <form action="/action_page.php">
        Username : <input type="text" name="User" value={this.state.value} onChange={this.handleChange} /><br />
        Password : <input type="text" name="Pass" value={this.state.value} onChange={this.handleChange} /> <br />
        <input type="button" value="Submit" 
        onClick={()=>{
          store.dispatch(
            {
              type:"LOGIN",payload:1,
              yaname:this.state.username,
              yapass:this.state.password
          })
          
          }}/>
        </form>
      </h2>
    )
  }
}



