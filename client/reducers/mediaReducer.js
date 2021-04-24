import actions from '../constants/actions.js';

const mediaReducer = (state = [], action) => {

  switch(action.type) {

    //Expected payload: array of media objects
    case (actions.GET_MEDIA): {
      return action.payload;
    }

    //Expected payload: media object to be pushed to the current media state array
    case(actions.ADD_MEDIA): {
      return [...state].push(action.payload);
    }

    //Expected payload: updated media object at given index position
    case(actions.UPDATE_MEDIA): {
      return [...state].splice(action.payload.position, 1, action.payload.media);
    }

    //Expected payload: delete media at given index position
    case (actions.DELETE_MEDIA): {
      return [...state].splice(action.payload, 1);
    }

    default: {
      return state;
    }

  }
}

export default mediaReducer;