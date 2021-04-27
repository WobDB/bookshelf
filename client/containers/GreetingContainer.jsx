import React, { Component } from 'react';
import { connect } from 'react-redux';
import GreetingDisplay from '../components/GreetingDisplay.jsx';

const mapStateToProps = (state) => {

  return {
    displayName: state.user.userProfile.firstName
  }
}

class GreetingContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GreetingDisplay {...this.props} />
    )
  }
}

export default connect(mapStateToProps, null)(GreetingContainer);