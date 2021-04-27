import React, { Component } from 'react';
import { connect } from 'react-redux';

import GreetingContainer from '../containers/GreetingContainer.jsx';
import MediaTypeContainer from '../containers/MediaTypeContainer.jsx';
import AddMediaContainer from '../containers/AddMediaContainer.jsx';
import MediaContainer from '../containers/MediaContainer.jsx';

import { getMediaActionCreator } from '../actions/mediaActionCreators';


const mapStateToProps = (state) => ({
  userId: state.user.userProfile._id
});

const mapDispatchToProps = (dispatch) => ({
  getMedia: (userId) => dispatch(getMediaActionCreator(userId))
});

class Home extends Component {
  constructor(props) {
    super(props);
  }

  //Fetch media for the authenticated for the user
  componentDidMount() {
    this.props.getMedia(this.props.userId);
  }

  render() {
    return (
      <div id="app-main">
        <GreetingContainer />
        <MediaTypeContainer />
        <AddMediaContainer />
        <MediaContainer />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);