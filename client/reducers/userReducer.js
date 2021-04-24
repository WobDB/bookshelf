import actions from '../constants/actions.js';

//Set initial state of the user - not authenticated, and profile is unknown.
const initialState = {
  sessionChecked: false,
  loggedIn: false,
  badLoginAttempted: false, //will be referenced to display error messaging to the user if they provided invalid credentials
  badCreateUserAttempted: false, //will be referenced to display error messaging to user if they did not properly attempt to create credentials
  userProfile: {}
};

const userReducer = (state = initialState, action) => {

  switch(action.type) {

    //Payload contains a boolean indicating whether the user currently has a valid authenticated session
    case (actions.CHECK_SESSION): {
      return action.payload.verified ? {sessionChecked: true, loggedIn: true, userProfile: action.payload.userProfile} 
              : state; //if not verified, do not update the state
    }

    //Payload contains a boolean whether the user logged in with proper credentials.
    case (actions.LOG_IN): {
      return action.payload.verified ? {...state, loggedIn: true, userProfile: action.payload.userProfile}
        : {...state, badLoginAttempted: true}; //if not verified, update state for use in indicating login was unsuccessful

    }

    case (actions.CREATE_USER): {
      return action.payload.verified ? {...state, loggedIn: true, userProfile: action.payload.userProfile}
        : {...state, badCreateUserAttempted: true}; //if not verified, update state for use in indicating user creation was unsuccessful

    }
  }

}

export default userReducer;

