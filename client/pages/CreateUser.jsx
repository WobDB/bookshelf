import React, { Component } from 'react';
import { connect } from 'react-redux';

import CreateUserDisplay from '../components/CreateUserDisplay.jsx';
import { createUserActionCreator } from '../actions/userActionCreators.js'; 

const mapDispatchToProps = (dispatch) => ({
  createUser: (e) => dispatch(createUserActionCreator(e))
})

class CreateUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <CreateUserDisplay {...this.props}/>
    )
  }
}

export default connect(null, mapDispatchToProps)(CreateUser);