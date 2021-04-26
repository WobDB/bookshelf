import actions from '../constants/actions.js';
import { defaultFields } from '../constants/mediaTypeConfigs.js';

export const updateMediaTypeActionCreator = (e) => {
/*
action creator intended to update the currently-selected
media to display on the main application (filter for media type)
*/

  //name attribute on button is the NON-display name 
  //from mediaTypesSchema from ../constants/mediaTypeConfigs.js
  return {
    type: actions.UPDATE_SELECTED_MEDIA_TYPE,
    payload: e.target.name 
  }

}

export const getMediaActionCreator = (userId) => (dispatch) => {
/*
thunked action creator to fetch all media for the user
*/

//unref once route handler is complete
  // fetch(`http://localhost:3000/?userId=${userId}`)
  //   .then(res => res.json())
  //   .then(media => {
  //     dispatch({
  //       type: actions.GET_MEDIA,
  //       payload: media
  //     })
  //   })
  //   .catch(err => {
  //     dispatch({
  //       type: actions.GET_MEDIA,
  //       payload: []
  //     })
  //   })
}
export const addMediaActionCreator = (e) => (dispatch) => {
/*
thunked action creator to add new media
*/

  console.log(e);
  e.preventDefault();
  fetch('http://localhost:3000/api/media', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      [defaultFields.TYPE]: e.target[0].value,
      [defaultFields.TITLE]: e.target[1].value,
      [defaultFields.CURRENT_STATUS]: e.target[2].value 
    })
  })
    .then(res => res.json())
    .then(newMedia => {
      dispatch({
        type: actions.ADD_MEDIA,
        payload: newMedia
      })
    })
    //Need to add a catch block and display error to user
}