import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addMediaActionCreator } from '../actions/mediaActionCreators';
import { defaultFields, mediaTypesSchema } from '../constants/mediaTypeConfigs';
import mediaStatuses from '../constants/mediaStatuses.js';


const mapDispatchToProps = (dispatch) => ({
  addMedia: (e) => dispatch(addMediaActionCreator(e))
});

class AddMediaContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    //Define potential media types to be selected (based on available type schema)
    const typeOptions = [];
    Object.keys(mediaTypesSchema).forEach((mediaType, idx) => {
      typeOptions.push(<option value={mediaType} key={`type-option-${idx}`}>{mediaTypesSchema[mediaType].displayName}</option>)
    });

    return (
      <div id='add-media-container'>
        <h3>Add new media</h3>
        <form onSubmit={this.props.addMedia}>

          <label htmlFor={defaultFields.TYPE}>Type</label>
          <select id={defaultFields.TYPE}>
            {typeOptions}
          </select>

          <label htmlFor={defaultFields.TITLE}>Title</label>
          <input type="text" id={defaultFields.TITLE}></input>

          <label htmlFor={defaultFields.CURRENT_STATUS}>Current Status:</label>
          <select id={defaultFields.CURRENT_STATUS}>
            <option value={mediaStatuses.BACKLOG}>Backlog</option>
            <option value={mediaStatuses.IN_PROGRESS}>In Progress</option>
            <option value={mediaStatuses.COMPLETE}>Complete</option>
          </select>
          <input type="submit" value="Add New Media"></input>
        </form>
      </div>
    )
  }
}


export default connect(null, mapDispatchToProps)(AddMediaContainer);