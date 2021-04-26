import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateMediaTypeActionCreator } from '../actions/mediaActionCreators.js';
import MediaTypeDisplay from '../components/MediaTypeDisplay.jsx';

const mapStateToProps = (state) => {

  //Get unique list of media types for the user
  const mediaTypes = state.media.media.reduce((types, media) => {
    if (!types.includes(media.type)) types.push(media.type);
    return types;
  }, []).sort();

  return {
    selectedType: state.media.selectedType,
    mediaTypes: mediaTypes
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateType: (e) => dispatch(updateMediaTypeActionCreator(e))
})

class MediaTypeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    //Create a MediaTypeDisplay component for each mediaType
    const mediaTypes = [];
    this.props.mediaTypes.forEach((type, idx) => {

      //define Props object to pass into MediaTypeDisplay
      const mediaTypeProps = {
        updateType: this.props.updateType,
        type: type,
        key: `media-type-${idx}`
      }
      //Indicate if the mediaType is currently selected by user
      if (type === this.props.selectedType) {
        mediaTypes.push(<MediaTypeDisplay 
          selected={true}
          {...mediaTypeProps}/>)
      } else {
        mediaTypes.push(<MediaTypeDisplay 
          selected={false} 
          {...mediaTypeProps}
          />)
      }
    });

    return (
      <div id='media-types-section'>
        <h3>Your media categories</h3>
        <div id='media-types-container'>
         {mediaTypes}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaTypeContainer);