import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginDisplay from '../components/LoginDisplay.jsx';
import { userLoginActionCreator } from '../actions/userActionCreators.js'; 

//Dispatcher for the user login submission
const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(userLoginActionCreator(e))
})

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <LoginDisplay {...this.props}/>
    )
  }
}

export default connect(null, mapDispatchToProps)(Login);