import React, { Component } from 'react';

import GreetingContainer from '../containers/GreetingContainer.jsx';
import MediaTypeContainer from '../containers/MediaTypeContainer.jsx';
import AddMediaContainer from '../containers/AddMediaContainer.jsx';
import MediaContainer from '../containers/MediaContainer.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
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

export default Home