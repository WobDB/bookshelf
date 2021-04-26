import React, { Component } from 'react';
import { connect } from 'react-redux';

import Media from '../components/Media.jsx';

const mapStateToProps = (state) => ({
  media: state.media.media,
  selectedType: state.media.selectedType
});

class MediaContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const medias = [];
    
    //Display only media that match the user-selected media type
    this.props.media
      .filter(media => media.type === this.props.selectedType)
      .forEach((media, idx) => {
        medias.push(<Media 
          {...media}
          key={`media-${idx}`}
        />)
      })
    
    return (
      <div id='media-container'>
        {medias}
      </div>
    )
  }
}

export default connect(mapStateToProps)(MediaContainer);