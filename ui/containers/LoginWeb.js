
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Login} from '../components/Pages/Login';
import * as counterActions from '../actions/actionCreator';
import { connect } from 'react-redux';
import { createStore } from 'redux'
import {User} from './User'
import {thelogin} from '../actions/actionCreator'
// @connect(state => ({
//   state: state.counter
// }))

class LoginWeb extends React.Component {
    render() {
        return (
            <div className="container">
                <Login changeUsername={() => this.props.thelogin("HELLO","ITSME")}/>
                <User username={this.props.user.username} password={this.props.user.password}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        thelogin: (username,password) => {
            dispatch(thelogin(username,password));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginWeb);