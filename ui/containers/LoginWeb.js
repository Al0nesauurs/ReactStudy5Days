
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Login from '../components/Pages/Login';
import * as counterActions from '../actions/actionCreator';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class LoginWeb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Login
        login={state.count}
        {...actions} />
    );
  }
}

export default connect(state => ({
    state: state.login
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(LoginWeb);