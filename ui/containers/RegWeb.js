
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Register,myvalue} from '../components/Pages/Register';
import * as counterActions from '../actions/actionCreator';
import { connect } from 'react-redux';
import { createStore } from 'redux'
import {REUser} from './User'
import {theregis} from '../actions/actionCreator'
// @connect(state => ({
//   state: state.counter
// }))


class RegWeb extends React.Component {

    render() {
        return (
            <div className="container">
                <Register 
                   {...this.props} />
                <REUser 
                    username={this.props.user.username} 
                    password={this.props.user.password}
                    repassword={this.props.user.repassword}
                    email={this.props.user.email}
                    />
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
        theregis: (username,password,repassword,email) => {
            dispatch(theregis(username,password,repassword,email));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegWeb);