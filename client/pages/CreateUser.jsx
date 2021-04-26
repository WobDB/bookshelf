import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CreateUserDisplay from '../components/CreateUserDisplay.jsx';
import { createUserActionCreator } from '../actions/userActionCreators.js'; 

const mapStateToProps = (state) => ({
  userLoggedIn: state.user.loggedIn
});
const mapDispatchToProps = (dispatch) => ({
  createUser: (e) => dispatch(createUserActionCreator(e))
})

class CreateUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    //If the user is now successfully created and logged in
    //Redirect them to the home page
    if (this.props.userLoggedIn) {
      return (
        <Redirect to='/'/>
      )
    } else {
      return (
        <CreateUserDisplay {...this.props}/>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);